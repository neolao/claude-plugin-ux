import { useEffect, useState } from "react";
import { fetchLabels, saveLabels, Label } from "./api";

export function LabelPicker({ boardId }: { boardId: string }) {
  const [labels, setLabels] = useState<Label[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    fetchLabels(boardId).then(setLabels).catch(() => setFailed(true));
  }, [boardId]);

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }

  if (failed) return <p role="alert">Could not load the labels. Reload the page to try again.</p>;
  if (labels === null) return <p>Loading labels…</p>;

  return (
    <div>
      <ul>
        {labels.map((l) => (
          <li key={l.id}>
            <label>
              <input type="checkbox" checked={selected.includes(l.id)} onChange={() => toggle(l.id)} />
              {l.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => saveLabels(boardId, selected)}>Save labels</button>
    </div>
  );
}
