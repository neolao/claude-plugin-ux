# UI inventory — Rolodex

## UI stack

- **Framework / UI layer:** Electron 31 — React 18 renderer (`src/`)
- **Styling approach:** plain CSS
- **i18n:** `t(key, params)` from `src/i18n.ts`, keys `screen.element.purpose` in `locales/en.json` (source language English) and `locales/fr.json`
- **UI testing:** none

## Interaction patterns in use

- results and failures are shown as a toast (`src/toast.ts`)
- files are picked through the native open dialog (`window.rolodex.showOpenDialog`, exposed by the preload script)
