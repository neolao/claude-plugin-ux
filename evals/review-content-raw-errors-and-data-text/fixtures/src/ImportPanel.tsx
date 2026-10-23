import { t } from "./i18n";
import { toast } from "./toast";
import { ApiError, OfflineError, importContacts } from "./api";

export function ImportPanel() {
  async function pickAndImport() {
    const [path] = await window.rolodex.showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: t("import.dialog.filter"), extensions: ["csv"] }],
    });
    if (!path) return;
    try {
      const result = await importContacts(path);
      toast(t("import.success", { added: result.added, skipped: result.skipped }));
    } catch (err) {
      if (err instanceof OfflineError) {
        toast(t("import.error.offline"));
      } else if (err instanceof ApiError) {
        toast(err.message);
      } else {
        throw err;
      }
    }
  }

  return (
    <section>
      <h2>{t("import.title")}</h2>
      <button onClick={pickAndImport}>{t("import.action")}</button>
    </section>
  );
}
