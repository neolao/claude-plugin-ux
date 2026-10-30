import { useState } from "react";

export function BoardMenu({ onRename, onArchive }: { onRename: () => void; onArchive: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="board-menu">
      <div className="board-menu-trigger" onClick={() => setOpen(!open)}>
        Board options
      </div>
      {open && (
        <ul className="board-menu-items">
          <li>
            <button onClick={onRename}>Rename board</button>
          </li>
          <li>
            <button onClick={onArchive}>Archive board</button>
          </li>
        </ul>
      )}
    </div>
  );
}
