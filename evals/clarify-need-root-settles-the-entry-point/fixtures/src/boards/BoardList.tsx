import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Button } from "../components/Button";
import { fetchBoards, type Board } from "../api";
import { t } from "../i18n";

export function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "ready">("loading");

  const load = () => {
    setStatus("loading");
    fetchBoards()
      .then((all) => {
        setBoards(all.filter((board) => !board.archived));
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, []);

  return (
    <>
      <Nav />
      <main className="page">
        <h1>{t("boards.title")}</h1>
        {status === "loading" && <p role="status">{t("boards.loading")}</p>}
        {status === "error" && (
          <div role="alert" className="error">
            <p>{t("boards.error")}</p>
            <Button onClick={load}>{t("boards.retry")}</Button>
          </div>
        )}
        {status === "ready" && (
          <ul className="board-list">
            {boards.map((board) => (
              <li key={board.id}>
                <Link to={`/boards/${board.id}`} className="board-row">{board.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
