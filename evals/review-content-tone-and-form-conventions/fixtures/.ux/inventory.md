# UI inventory — Lumen

## UI stack

- **Framework / UI layer:** Electron 31 — React 18 renderer (`src/renderer/`), application menu in `src/main/menu.ts`
- **Styling approach:** plain CSS
- **i18n:** `t(key, params)` from `src/i18n.ts`, keys `screen.element.purpose` in `locales/en.json` (source language English) and `locales/de.json`
- **UI testing:** none

## Interaction patterns in use

- success is shown as a short toast (`src/renderer/toast.ts`)
- files are picked through the native open dialog
