# UI inventory — Lumen

## UI stack

- **Framework / UI layer:** Electron 31 — React 18 renderer (`src/`)
- **Component library / design system:** none
- **Styling approach:** plain CSS
- **UI state management:** React state
- **Routing / navigation:** two panels, `src/CueList.tsx` and `src/FixtureList.tsx`
- **i18n:** none — one language (English); UI strings live in `src/strings.ts`, imported by the components
- **UI testing:** none

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Cue list | left panel | src/CueList.tsx | write and run cues | |
| Fixture list | right panel | src/FixtureList.tsx | patch fixtures | |

## Known gaps

- no i18n layer (`src/strings.ts` is a plain object)
