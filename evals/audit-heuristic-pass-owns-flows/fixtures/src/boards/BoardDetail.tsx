import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Button } from "../components/Button";
import { archiveBoard, fetchBoard, type Board, type Card } from "../api";
import { t } from "../i18n";
import { toast } from "../toast";

export function BoardDetail() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState<(Board & { cards: Card[] }) | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "ready">("loading");
  const [archiving, setArchiving] = useState(false);

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
              <h1>{board.name}</h1>
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
