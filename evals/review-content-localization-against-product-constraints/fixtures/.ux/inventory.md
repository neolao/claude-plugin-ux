# UI inventory — Deskmap

## UI stack

- **Framework / UI layer:** React 18 + TypeScript (`src/`)
- **Styling approach:** plain CSS, one file next to each component
- **i18n:** i18next — `t(key, params)` from `src/i18n.ts`; keys `screen.element.purpose`, ICU plurals in the message (`{count, plural, =0 {…} one {…} other {…}}`); strings in `locales/en.json` (source language English) and `locales/ar.json`
- **UI testing:** none
