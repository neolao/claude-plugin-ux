# UI inventory — Rolodex

## UI stack

- **Framework / UI layer:** React 18 + TypeScript (`src/`)
- **Styling approach:** plain CSS
- **i18n:** `t(key, params)` from `src/i18n.ts`, keys `screen.element.purpose` in `locales/en.json` (source language English) and `locales/fr.json`
- **UI testing:** none

## Interaction patterns in use

- validation errors are listed at the top of the form after submit
