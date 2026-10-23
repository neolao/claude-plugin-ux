import { t } from "../i18n";
import { toast } from "./toast";
import { addCue, deleteCue, exportShow, fetchCues, go, saveShow } from "./api";

export function CueList() {
  const cues = fetchCues();

  return (
    <section>
      <h2>{t("cues.title")}</h2>
      <ol>
        {cues.map((cue) => (
          <li key={cue.id}>
            {cue.number} — {cue.label}
            <button onClick={() => deleteCue(cue.id)}>{t("cues.delete")}</button>
          </li>
        ))}
      </ol>
      <button onClick={() => addCue()}>{t("cues.add")}</button>
      <button onClick={() => go()}>{t("cues.go")}</button>
      <button onClick={() => saveShow().then(() => toast(t("cues.saved")))}>{t("menu.show.save")}</button>
      <button onClick={() => exportShow().then(() => toast(t("cues.exported")))}>{t("menu.show.export")}</button>
    </section>
  );
}
