import { app, dialog, Menu, MenuItemConstructorOptions } from "electron";
import { t } from "../i18n";
import { exportShow, importShow, saveShow } from "./show";

// Built once at startup by src/main/index.ts.
export function buildMenu(): Menu {
  const template: MenuItemConstructorOptions[] = [
    { role: "appMenu" },
    {
      label: t("menu.show"),
      submenu: [
        {
          label: t("menu.show.import"),
          click: async () => {
            const { filePaths } = await dialog.showOpenDialog({ properties: ["openFile"] });
            if (filePaths[0]) importShow(filePaths[0]);
          },
        },
        {
          label: t("menu.show.export"),
          click: async () => {
            const { filePath } = await dialog.showSaveDialog({});
            if (filePath) exportShow(filePath);
          },
        },
        { type: "separator" },
        { label: t("menu.show.save"), accelerator: "CmdOrCtrl+S", click: () => saveShow() },
      ],
    },
    { role: "editMenu" },
    { role: "windowMenu" },
  ];
  return Menu.buildFromTemplate(template);
}

app.whenReady();
