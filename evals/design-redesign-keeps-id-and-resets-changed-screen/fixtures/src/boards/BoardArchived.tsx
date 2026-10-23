import { useLocation } from "react-router-dom";
import { t } from "../i18n";

// Reached from src/boards/BoardDetail.tsx once the archive request has succeeded.
export function BoardArchived() {
  const { state } = useLocation() as { state?: { name?: string } };

  return (
    <main className="page">
      <h1>{t("board.archived.title")}</h1>
      <p>{t("board.archived.body", { name: state?.name ?? "" })}</p>
    </main>
  );
}
