# UI inventory — Stagebook

## UI stack

- **Framework / UI layer:** React 18, Vite
- **Component library / design system:** in-house `src/components/`
- **Styling approach:** CSS modules with the tokens of `src/styles/tokens.css`
- **UI state management:** Zustand
- **Routing / navigation:** react-router, `/rig`, `/fixtures/:id`, `/cues`
- **i18n:** none, English strings in `src/strings.ts`
- **UI testing:** Testing Library

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | src/styles/tokens.css | surface, surface-raised, text, text-muted, border, primary, on-primary, error, warning, success |
| Typography | src/styles/tokens.css | 12 / 13 / 14 / 18 / 24, Inter, tabular numerals on `--font-tabular` |
| Spacing | src/styles/tokens.css | 4 / 8 / 12 / 16 / 24 / 32 |
| Theming (dark mode…) | src/styles/tokens.css | light and dark, `[data-theme]` |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Rig | /rig | src/pages/Rig.tsx | every fixture of the rig | |
| Fixture | /fixtures/:id | src/pages/Fixture.tsx | one fixture, its patch and history | |
| Cues | /cues | src/pages/Cues.tsx | the show's cue list | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| DataTable | src/components/DataTable.tsx | the cue list | default, compact; selected row; sortable columns; cell types: text, number, badge |
| Card | src/components/Card.tsx | the fixture's history entries | default |
| Badge | src/components/Badge.tsx | a fixture's state | ok, warning, error |

## Interaction patterns in use

- an edit in a table cell saves on blur and shows the saved value in place

## Known gaps

- DataTable has no cell type for a color swatch
