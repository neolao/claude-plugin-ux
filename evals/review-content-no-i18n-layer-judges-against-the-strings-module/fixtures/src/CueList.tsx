import { useState } from "react";
import { strings } from "./strings";
import { addCue, deleteCue, fetchCues } from "./api";

const s = strings.cueList;

export function CueList() {
  const { cues, loading } = fetchCues();
  const [error, setError] = useState<string | null>(null);

  if (loading) return <p>Loading cues…</p>;

  if (cues.length === 0) {
    return (
      <section>
        <h2>{s.title}</h2>
        <p>{s.empty}</p>
        <button onClick={() => addCue()}>{s.add}</button>
      </section>
    );
  }

  return (
    <section>
      <h2>{s.title}</h2>
      {error && <p role="alert">{error}</p>}
      <ol>
        {cues.map((cue) => (
          <li key={cue.id}>
            {cue.number} — {cue.label}
            <button
              onClick={() =>
                deleteCue(cue.id).catch((err) => {
                  console.error("deleteCue failed", err);
                  setError(s.deleteError);
                })
              }
            >
              {s.deleteCue}
            </button>
          </li>
        ))}
      </ol>
      <button onClick={() => addCue()}>{s.add}</button>
      <button>{s.go}</button>
    </section>
  );
}
