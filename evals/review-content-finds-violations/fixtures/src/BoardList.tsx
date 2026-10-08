import { t } from "./i18n";
import { fetchBoards, createBoard } from "./api";

export function BoardList({ workspaceId }: { workspaceId: string }) {
  const { boards, error } = fetchBoards(workspaceId);

  if (error) {
    console.error("fetchBoards failed", error);
    return <p role="alert">Something went wrong</p>;
  }

  if (boards.length === 0) {
    return <p>{t("board.empty")}</p>;
  }

  return (
    <section>
      <h2>{t("board.title")}</h2>
      <p>{`${boards.length} card${boards.length > 1 ? "s" : ""} in progress`}</p>
      <ul>
        {boards.map((b) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
      <button onClick={() => createBoard(workspaceId)}>{t("board.create")}</button>
    </section>
  );
}
