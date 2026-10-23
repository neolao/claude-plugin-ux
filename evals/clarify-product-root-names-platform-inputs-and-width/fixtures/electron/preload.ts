import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("cuecard", {
  onNavigate: (handler: (route: string) => void) =>
    ipcRenderer.on("navigate", (_event, route: string) => handler(route)),
  onTheme: (handler: (theme: "light" | "dark") => void) =>
    ipcRenderer.on("theme", (_event, theme: "light" | "dark") => handler(theme)),
  onSave: (handler: () => void) => ipcRenderer.on("save", () => handler()),
  onOpen: (handler: (file: string) => void) =>
    ipcRenderer.on("open", (_event, file: string) => handler(file)),
});
