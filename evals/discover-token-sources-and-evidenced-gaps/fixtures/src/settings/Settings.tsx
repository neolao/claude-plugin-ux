import { useState } from "react";
import { saveLateThreshold } from "../api";
import { Button } from "../components/Button";
import { t } from "../i18n";

// Route /settings, reached from the Nav.
export function Settings() {
  const [minutes, setMinutes] = useState(15);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    await saveLateThreshold(minutes);
    setSaving(false);
  }

  return (
    <section className="max-w-md">
      <h1 className="mb-3 text-xl font-semibold">{t("settings.title")}</h1>
      <span className="legacy-badge">beta</span>
      <label className="mt-3 block">
        {t("settings.lateThreshold")}
        <input
          type="number"
          className="ml-2 w-20 rounded-card border px-2 py-1"
          value={minutes}
          onChange={(event) => setMinutes(Number(event.target.value))}
        />
      </label>
      <Button className="mt-4" disabled={saving} onClick={save}>
        Save changes
      </Button>
    </section>
  );
}
