# UI inventory — Cuecard

> Written by `/ux:discover`, refreshed by `/ux:implement`. Describes the UI as it *is*, not as it should be.

## UI stack

- **Framework / UI layer:** Electron 31 — React 18 renderer (`src/renderer/`)
- **Component library / design system:** in-house, `src/renderer/components/`
- **Styling approach:** CSS custom properties in `src/renderer/styles/tokens.css`, a few rules in `src/renderer/styles/app.css`, inline styles in the components
- **UI state management:** React `useState` per screen
- **Routing / navigation:** react-router `HashRouter` (`src/renderer/App.tsx`); every route is reached from the menu bar declared in `electron/main.ts` — the renderer has no navigation bar
- **i18n:** none — a single map in `src/renderer/strings.ts`, English
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | src/renderer/styles/tokens.css | bg #ffffff, panel #f4f4f5, text #18181b, muted #71717a, accent #c2410c, go #15803d, standby #b45309 |
| Typography | src/renderer/styles/tokens.css | families only: `--font-ui` system stack, `--font-mono`; no size scale (browser default 16 px, `1rem` panel titles) |
| Spacing | src/renderer/styles/tokens.css | 4 / 8 / 12 / 16 px (`--space-1` to `--space-4`) |
| Radii / borders | src/renderer/styles/tokens.css | 3 px (`--radius`); no border token |
| Breakpoints | none | window min width 900 px (`electron/main.ts`) |
| Motion | src/renderer/styles/tokens.css | 120 ms (`--duration-fast`) |
| Theming (dark mode…) | src/renderer/styles/tokens.css | `[data-theme="dark"]` overrides bg, panel, text, muted; set by `electron/main.ts` from `nativeTheme` — follows the OS |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Cue sheet | `/` — File › New Cue Sheet (Cmd/Ctrl+N), Window › Cue Sheet (Cmd/Ctrl+1) | src/renderer/screens/CueSheet.tsx | write the cues and run the show with Standby / Go | none — app not launched |
| Cue library | `/library` — Window › Cue Library (Cmd/Ctrl+2) | src/renderer/screens/CueLibrary.tsx | insert a reusable cue into the sheet | none — app not launched |
| Preferences | `/preferences` — File › Preferences… (Cmd/Ctrl+,) | src/renderer/screens/Preferences.tsx | set the GO key and the standby delay | none — app not launched |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Button | src/renderer/components/Button.tsx | every action | tones: default, go, standby |
| Panel | src/renderer/components/Panel.tsx | framing a list with a title | one variant |

## Interaction patterns in use

- every screen is reached from the menu bar with an accelerator; the renderer draws no navigation
- the current cue is marked by a bold row; Standby and Go are buttons on each row
- the theme follows the OS setting through `data-theme`

## Known gaps

- `src/renderer/components/Button.tsx:9` — the go and standby buttons use the literal `#ffffff` for their text, beside the palette in tokens.css
- `src/renderer/screens/CueSheet.tsx:41` — the current row is marked by an inline `fontWeight`, no token or class for the selected state
- no focus style anywhere: `not found: outline or :focus-visible in src/renderer/styles/`
- no typography scale: `tokens.css` defines families only, sizes are the browser defaults
