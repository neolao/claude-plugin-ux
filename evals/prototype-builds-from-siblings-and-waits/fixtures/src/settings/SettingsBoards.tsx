import { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Button } from "../components/Button";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { deleteBoard, fetchBoards, renameBoard, type Board } from "../api";
import { t } from "../i18n";
import { toast } from "../toast";

export function SettingsBoards() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "ready">("loading");
  const [editing, setEditing] = useState<Board | null>(null);
  const [draft, setDraft] = useState("");
  const [toDelete, setToDelete] = useState<Board | null>(null);

  const load = () => {
    setStatus("loading");
    fetchBoards()
      .then((all) => {
        setBoards(all);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, []);

  const startRename = (board: Board) => {
    setEditing(board);
    setDraft(board.name);
  };

  const saveRename = async () => {
    if (!editing) return;
    try {
      const renamed = await renameBoard(editing.id, draft.trim());
      setBoards((all) => all.map((board) => (board.id === renamed.id ? renamed : board)));
      toast("success", t("settings.boards.renamed", { name: renamed.name }));
      setEditing(null);
    } catch {
      toast("error", t("settings.boards.renameFailed"));
    }
  };

  const confirmDelete = async () => {
    if (!toDelete) return;
    try {
      await deleteBoard(toDelete.id);
      setBoards((all) => all.filter((board) => board.id !== toDelete.id));
      toast("success", t("settings.boards.deleted", { name: toDelete.name }));
    } catch {
      toast("error", t("settings.boards.deleteFailed"));
    } finally {
      setToDelete(null);
    }
  };

  return (
    <>
      <Nav />
      <main className="page">
        <h1>{t("settings.boards.title")}</h1>
        {status === "loading" && <p role="status">{t("settings.boards.loading")}</p>}
        {status === "error" && (
          <div role="alert" className="error">
            <p>{t("settings.boards.error")}</p>
            <Button onClick={load}>{t("settings.boards.retry")}</Button>
          </div>
        )}
        {status === "ready" && boards.length === 0 && <p className="empty">{t("settings.boards.empty")}</p>}
        {status === "ready" && boards.length > 0 && (
          <ul className="settings-list">
            {boards.map((board) => (
              <li key={board.id} className="settings-row">
                {editing?.id === board.id ? (
                  <input
                    className="rename-input"
                    aria-label={t("settings.boards.renameLabel", { name: board.name })}
                    value={draft}
                    autoFocus
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") saveRename();
                      if (event.key === "Escape") setEditing(null);
                    }}
                  />
                ) : (
                  <span className="settings-name">{board.name}</span>
                )}
                <Button onClick={() => startRename(board)}>{t("settings.boards.rename")}</Button>
                <Button variant="danger" onClick={() => setToDelete(board)}>{t("settings.boards.delete")}</Button>
              </li>
            ))}
          </ul>
        )}
      </main>
      <ConfirmDialog
        open={toDelete !== null}
        title={t("settings.boards.deleteTitle", { name: toDelete?.name ?? "" })}
        body={t("settings.boards.deleteBody")}
        confirmLabel={t("settings.boards.deleteConfirm")}
        cancelLabel={t("settings.boards.cancel")}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </>
  );
}
