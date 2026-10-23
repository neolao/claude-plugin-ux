import { useEffect, useRef, useState } from "react";
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
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

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
    setEditing(true);
  };

  const stopRename = () => {
    setEditing(false);
    titleRef.current?.focus();
  };

  const save = async (name: string, previous: string) => {
    setSaving(true);
    try {
      const renamed = await renameBoard(id, name);
      setBoard((current) => (current ? { ...current, name: renamed.name } : current));
      stopRename();
      toast("success", t("board.renamed", { name: renamed.name }), {
        label: t("board.rename.undo"),
        onClick: () => save(previous, renamed.name),
      });
    } catch {
      toast("error", "Rename failed");
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
              {editing ? (
                <input
                  className="rename-input"
                  aria-label={t("board.rename.label")}
                  value={draft}
                  autoFocus
                  disabled={saving}
                  onFocus={(event) => event.target.select()}
                  onChange={(event) => setDraft(event.target.value)}
                  onBlur={stopRename}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") save(draft.trim(), board.name);
                    if (event.key === "Escape") stopRename();
                  }}
                />
              ) : (
                <h1
                  ref={titleRef}
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
