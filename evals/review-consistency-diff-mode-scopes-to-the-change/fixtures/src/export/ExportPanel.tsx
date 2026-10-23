import { useState } from "react";
import { Button } from "../components/Button";
import { SmallButton } from "./SmallButton";
import { KeyboardHint } from "./KeyboardHint";
import { ExportHistory } from "./ExportHistory";
import { clearHistory, exportBoard, restoreHistory, shareUrl } from "./api";
import { showToast } from "../toast";
import { t } from "../i18n";
import "./ExportPanel.css";

// Opened from the board toolbar (BoardToolbar.tsx) as a side panel.
export function ExportPanel({ boardId }: { boardId: string }) {
  const [format, setFormat] = useState<"csv" | "json">("csv");
  const [copied, setCopied] = useState(false);

  async function handleExport() {
    await exportBoard(boardId, format);
    showToast(t("export.done"));
  }

  async function handleClear() {
    await clearHistory(boardId);
    showToast(t("export.cleared"), () => restoreHistory(boardId));
  }

  async function handleCopyLink() {
    await navigator.clipboard.writeText(shareUrl(boardId));
    setCopied(true);
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
      <div className="share-row">
        <button type="button" className="share-btn" onClick={handleCopyLink}>
          {t("share.copy")}
        </button>
        {copied && <span className="share-copied">{t("share.copied")}</span>}
      </div>
      <p className="share-hint">{t("share.hint")}</p>
    </section>
  );
}
