import { t } from "./i18n";
import { saveSettings, deleteWorkspace } from "./api";

export function WorkspaceSettings({ workspaceId }: { workspaceId: string }) {
  return (
    <form onSubmit={() => saveSettings(workspaceId)}>
      <h1>Workspace settings</h1>
      <button type="button" onClick={() => deleteWorkspace(workspaceId)}>
        {t("workspace.delete")}
      </button>
      <button type="submit">{t("settings.save")}</button>
    </form>
  );
}
