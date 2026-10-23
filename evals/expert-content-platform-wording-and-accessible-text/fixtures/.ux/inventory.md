# Inventory

## UI stack
Electron 30 + React 18 + TypeScript, CSS modules. i18n: none — strings live in `src/ui/strings.ts`, one object per screen.

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Viewport | main window | src/ui/Viewport.tsx | the rig in 3D, selection by click and marquee | — |
| Selection panel | right dock | src/ui/SelectionPanel.tsx | the selected fixtures as a list | — |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| IconButton | src/ui/IconButton.tsx | icon-only actions in rows and toolbars | default, hover, disabled |
| Toast | src/ui/Toast.tsx | success and failure messages | success, error |

## Interaction patterns in use

- native menu bar (Electron `Menu`): File, Edit, View, Window, Help; item labels in title case ("Save As…", "Import Fixtures…")
- native OS dialogs for open and save
- live region `src/ui/announce.ts` for screen-reader announcements after an action
