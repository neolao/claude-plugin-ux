# UI inventory — Dispatch

## UI stack

- **Framework / UI layer:** React 18 + TypeScript (`src/`)
- **Styling approach:** plain CSS with custom properties (`src/tokens.css`, `src/styles.css`)
- **i18n:** hardcoded strings
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | `src/tokens.css` | see `.ux/style.md` Palette |
| Typography | `src/tokens.css` | 13 / 14 / 16 / 20 px |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Dialog | `src/Dialog.tsx` | modal confirmations and forms; moves focus in on open, traps Tab, restores focus on close, Escape closes | title, body, actions slot |
| announce | `src/a11y.ts` | live-region helper: `announce(message)` speaks a status change to assistive technology | polite |

## Interaction patterns in use

- destructive actions confirmed by a Dialog
- status changes announced through `announce`

## Known gaps

- none recorded
