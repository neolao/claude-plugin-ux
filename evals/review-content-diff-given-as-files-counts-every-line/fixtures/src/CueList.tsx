import { useState } from "react";
import { t } from "./i18n";
import { addCue, deleteCue, fetchCues } from "./api";

export function CueList() {
  const { cues, loading } = fetchCues();
  const [error, setError] = useState<string | null>(null);

  if (loading) return <p>Loading cues…</p>;

  return (
    <section>
      <h2>{t("cues.title")}</h2>
      {error && <p role="alert">{error}</p>}
      <ol>
        {cues.map((cue) => (
          <li key={cue.id}>
            {cue.number} — {cue.label}
            <button onClick={() => deleteCue(cue.id).catch(() => setError(t("cues.delete.error")))}>
              {t("cues.delete")}
            </button>
          </li>
        ))}
      </ol>
      <button onClick={() => addCue()}>{t("cues.add")}</button>
    </section>
  );
}
