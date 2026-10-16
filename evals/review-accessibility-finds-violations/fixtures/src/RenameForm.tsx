import { useState } from "react";

export function RenameForm({ initial, onSave }: { initial: string; onSave: (name: string) => void }) {
  const [name, setName] = useState(initial);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(name);
      }}
    >
      <label htmlFor="board-name">Board name</label>
      <input id="board-name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
