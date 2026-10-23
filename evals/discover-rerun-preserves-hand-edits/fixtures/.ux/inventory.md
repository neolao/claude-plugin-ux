# UI inventory — Taskboard

> Written by `/ux:discover`, refreshed by `/ux:implement`. Describes the UI as it *is*, not as it should be.

## UI stack

- **Framework / UI layer:** React 18 + TypeScript, react-router 6
- **Component library / design system:** in-house `src/components/`
- **Styling approach:** one stylesheet, `src/styles.css`, one class per component
- **UI state management:** component state
- **Routing / navigation:** routes in `src/App.tsx`; top navigation bar `src/components/Nav.tsx`
- **i18n:** `t(key, params)` from `src/i18n.ts`, dotted keys (`board.archive`)
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | none | literals in `src/styles.css` |
| Typography | none | browser default |
| Spacing | none | literals in `src/styles.css` |
| Radii / borders | none | 4px everywhere |
| Breakpoints | none | |
| Motion | none | |
| Theming (dark mode…) | none | single theme |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Boards list | `/boards` — Nav "Boards" | `src/boards/BoardList.tsx` | pick a board | none |
| Board detail | `/boards/:id` — a row of the Boards list | `src/boards/BoardDetail.tsx` | read one board, archive it | none |
| Board archived | `/boards/:id/archived` — after "Archive board" on Board detail | `src/boards/BoardArchived.tsx` | tell the operator the board is archived | none |
| Settings › Boards | `/settings/boards` — Nav "Settings" | `src/settings/SettingsBoards.tsx` | rename or delete boards | none |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Button | `src/components/Button.tsx` | every action | `primary`, `secondary`, `danger`; disabled |
| ConfirmDialog | `src/components/ConfirmDialog.tsx` | confirming an irreversible action | open / closed; native `<dialog>` |
| Nav | `src/components/Nav.tsx` | the top navigation bar | current link |
| toast | `src/toast.ts` | success and error messages | `success`, `error` |

## Interaction patterns in use

- success shown as a toast
- an irreversible action is confirmed by ConfirmDialog, which names what is lost
- inline rename: the name becomes an input, Enter saves, Escape cancels

## Known gaps

- no design tokens: colors and spacing are literals in `src/styles.css`
- no dark theme
- the Boards list renders an empty `<ul>` when there is no board — `src/boards/BoardList.tsx:36` (audit 2026-09-14)
- the rename input of Settings › Boards has a hardcoded placeholder outside `t()` — `src/settings/SettingsBoards.tsx:79` (audit 2026-09-14)
