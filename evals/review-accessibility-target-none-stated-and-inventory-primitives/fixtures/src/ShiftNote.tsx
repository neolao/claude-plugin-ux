import { useState } from "react";

export function ShiftNote({ onSave }: { onSave: (note: string) => void }) {
  const [note, setNote] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(note);
      }}
    >
      <label htmlFor="shift-note">Shift note</label>
      <textarea id="shift-note" value={note} onChange={(e) => setNote(e.target.value)} aria-describedby="shift-note-help" />
      <p id="shift-note-help" className="shift-note-help">
        Visible to the next shift only. Keep it under 200 characters.
      </p>
      <button type="submit">Save note</button>
    </form>
  );
}
