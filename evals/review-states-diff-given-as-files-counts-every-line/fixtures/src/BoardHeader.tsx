import { useState } from "react";
import { renameBoard } from "./api";

export function BoardHeader({ boardId, name }: { boardId: string; name: string }) {
  const [draft, setDraft] = useState(name);

  return (
    <header>
      <input value={draft} onChange={(e) => setDraft(e.target.value)} />
      <button onClick={() => renameBoard(boardId, draft)}>Rename</button>
    </header>
  );
}
