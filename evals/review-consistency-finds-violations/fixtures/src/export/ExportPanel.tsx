import { useState } from "react";
import { Button } from "../components/Button";
import { SmallButton } from "./SmallButton";
import { KeyboardHint } from "./KeyboardHint";
import { ExportHistory } from "./ExportHistory";
import { clearHistory, exportBoard } from "./api";
import { showToast } from "../toast";
import { t } from "../i18n";
import "./ExportPanel.css";

// Opened from the board toolbar (BoardToolbar.tsx) as a side panel.
export function ExportPanel({ boardId }: { boardId: string }) {
  const [format, setFormat] = useState<"csv" | "json">("csv");

  async function handleExport() {
    await exportBoard(boardId, format);
    showToast(t("export.done"));
  }

  async function handleClear() {
    if (window.confirm(t("export.clear.confirm"))) {
      await clearHistory(boardId);
      showToast(t("export.cleared"));
    }
  }

  return (
    <section className="export-panel">
      <h2>{t("export.title")}</h2>
      <label>
        {t("export.format")}
        <select value={format} onChange={(e) => setFormat(e.target.value as "csv" | "json")}>
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
        </select>
      </label>
      <div className="export-actions">
        <Button variant="primary" onClick={handleExport}>{t("export.run")}</Button>
        <KeyboardHint keys="⌘E" />
      </div>
      <ExportHistory boardId={boardId} />
      <SmallButton onClick={handleClear}>{t("export.clear")}</SmallButton>
    </section>
  );
}
