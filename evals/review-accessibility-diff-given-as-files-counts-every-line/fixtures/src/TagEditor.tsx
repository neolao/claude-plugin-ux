import { useState } from "react";
import { PlusIcon } from "./icons";

export function TagEditor({ tags, onAdd, onToggle }: { tags: string[]; onAdd: (tag: string) => void; onToggle: (tag: string) => void }) {
  const [draft, setDraft] = useState("");

  return (
    <div className="tag-editor">
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag}>
            <div className="chip" onClick={() => onToggle(tag)}>
              {tag}
            </div>
          </li>
        ))}
      </ul>
      <label htmlFor="new-tag">New tag</label>
      <input id="new-tag" value={draft} onChange={(e) => setDraft(e.target.value)} />
      <button
        onClick={() => {
          onAdd(draft);
          setDraft("");
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
