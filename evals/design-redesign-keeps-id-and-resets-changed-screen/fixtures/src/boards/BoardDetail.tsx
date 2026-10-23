import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Button } from "../components/Button";
import { archiveBoard, fetchBoard, renameBoard, type Board, type Card } from "../api";
import { t } from "../i18n";
import { toast } from "../toast";

export function BoardDetail() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState<(Board & { cards: Card[] }) | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "ready">("loading");
  const [archiving, setArchiving] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);

  const load = () => {
    setStatus("loading");
    fetchBoard(id)
      .then((loaded) => {
        setBoard(loaded);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, [id]);

  const archive = async () => {
    setArchiving(true);
    try {
      await archiveBoard(id);
      navigate(`/boards/${id}/archived`, { state: { name: board?.name } });
    } catch {
      toast("error", t("board.archiveFailed"));
      setArchiving(false);
    }
  };

  const startRename = () => {
    if (!board) return;
    setDraft(board.name);
    setRenaming(true);
  };

  const cancelRename = () => setRenaming(false);

  const saveRename = async () => {
    if (!board) return;
    setSaving(true);
    try {
      const renamed = await renameBoard(id, draft.trim());
      setBoard({ ...board, name: renamed.name });
      setRenaming(false);
      toast("success", t("board.renamed", { name: renamed.name }));
    } catch {
      toast("error", t("board.rename.failed"));
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Nav />
      <main className="page">
        {status === "loading" && <p role="status">{t("board.loading")}</p>}
        {status === "error" && (
          <div role="alert" className="error">
            <p>{t("board.error")}</p>
            <Button onClick={load}>{t("board.retry")}</Button>
          </div>
        )}
        {status === "ready" && board && (
          <>
            <header className="board-header">
              {renaming ? (
                <input
                  className="rename-input"
                  aria-label={t("board.rename.label")}
                  value={draft}
                  autoFocus
                  disabled={saving}
                  onFocus={(event) => event.target.select()}
                  onChange={(event) => setDraft(event.target.value)}
                  onBlur={cancelRename}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") saveRename();
                    if (event.key === "Escape") cancelRename();
                  }}
                />
              ) : (
                <h1
                  tabIndex={0}
                  onClick={startRename}
                  onKeyDown={(event) => {
                    if (event.key === "F2") startRename();
                  }}
                >
                  {board.name}
                </h1>
              )}
              <Button onClick={archive} disabled={archiving}>
                {archiving ? t("board.archiving") : t("board.archive")}
              </Button>
            </header>
            {board.cards.length === 0 ? (
              <p className="empty">{t("board.noCards")}</p>
            ) : (
              <ul className="card-list">
                {board.cards.map((card) => (
                  <li key={card.id} className="card">{card.title}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>
    </>
  );
}
