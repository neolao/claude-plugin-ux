import { useEffect, useRef, useState } from "react";
import { getBoardTitle, saveBoardTitle } from "./api";
import { t } from "./i18n";
import "./styles.css";

// Rendered in the board header (BoardHeader.tsx).
export function BoardTitle({ boardId, initial }: { boardId: string; initial: string }) {
  const [title, setTitle] = useState(initial);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(initial);
  const input = useRef<HTMLInputElement>(null);
  const text = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (editing) {
      getBoardTitle(boardId).then(setDraft);
      input.current?.select();
    }
  }, [editing, boardId]);

  async function commit() {
    if (draft.trim() === "") return;
    await saveBoardTitle(boardId, draft);
    setTitle(draft);
    setEditing(false);
    text.current?.focus();
  }

  function leave() {
    setTitle(draft);
    setEditing(false);
    text.current?.focus();
  }

  if (!editing) {
    return (
      <span ref={text} tabIndex={-1} className="board-title" onDoubleClick={() => setEditing(true)}>
        {title}
      </span>
    );
  }
  return (
    <input
      ref={input}
      className="board-title"
      aria-label={t("board.title.label")}
      value={draft}
      autoFocus
      onChange={(e) => setDraft(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") commit();
        if (e.key === "Escape") leave();
      }}
      onBlur={leave}
    />
  );
}
