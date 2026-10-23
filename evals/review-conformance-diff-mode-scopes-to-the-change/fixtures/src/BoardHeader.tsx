import { useState } from "react";
import { renameBoard } from "./api";
import { t } from "./i18n";

// Header of the board page.
export function BoardHeader({ boardId, name }: { boardId: string; name: string }) {
  const [current, setCurrent] = useState(name);

  async function rename() {
    const next = window.prompt(t("board.rename.prompt"), current);
    if (!next || next === current) return;
    await renameBoard(boardId, next);
    setCurrent(next);
  }

  return (
    <header>
      <h1>{current}</h1>
      <button onClick={rename}>{t("board.rename")}</button>
    </header>
  );
}
