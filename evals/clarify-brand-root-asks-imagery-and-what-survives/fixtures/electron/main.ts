import { app, BrowserWindow, Menu, nativeTheme, dialog } from "electron";
import path from "node:path";

let window: BrowserWindow | null = null;

function createWindow() {
  window = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: { preload: path.join(__dirname, "preload.js") },
  });
  window.loadFile(path.join(__dirname, "../renderer/index.html"));
  window.webContents.send("theme", nativeTheme.shouldUseDarkColors ? "dark" : "light");
}

nativeTheme.on("updated", () => {
  window?.webContents.send("theme", nativeTheme.shouldUseDarkColors ? "dark" : "light");
});

// Every renderer route reachable from the menu bar goes through the "navigate" channel.
const menu = Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      { label: "New Cue Sheet", accelerator: "CmdOrCtrl+N", click: () => window?.webContents.send("navigate", "/") },
      {
        label: "Open…",
        accelerator: "CmdOrCtrl+O",
        click: async () => {
          const result = await dialog.showOpenDialog({ filters: [{ name: "Cue sheet", extensions: ["cue.json"] }] });
          if (!result.canceled) window?.webContents.send("open", result.filePaths[0]);
        },
      },
      { label: "Save", accelerator: "CmdOrCtrl+S", click: () => window?.webContents.send("save") },
      { type: "separator" },
      { label: "Preferences…", accelerator: "CmdOrCtrl+,", click: () => window?.webContents.send("navigate", "/preferences") },
    ],
  },
  { label: "Edit", submenu: [{ role: "undo" }, { role: "redo" }, { type: "separator" }, { role: "cut" }, { role: "copy" }, { role: "paste" }] },
  {
    label: "Window",
    submenu: [
      { label: "Cue Sheet", accelerator: "CmdOrCtrl+1", click: () => window?.webContents.send("navigate", "/") },
      { label: "Cue Library", accelerator: "CmdOrCtrl+2", click: () => window?.webContents.send("navigate", "/library") },
    ],
  },
]);

app.whenReady().then(() => {
  Menu.setApplicationMenu(menu);
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
