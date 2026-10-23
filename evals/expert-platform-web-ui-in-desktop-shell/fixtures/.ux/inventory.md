# UI inventory — Cue

## UI stack

- **Framework / UI layer:** React 18 in the Electron 30 renderer (web UI inside a desktop shell)
- **Component library / design system:** in-house `src/renderer/components/`
- **Styling approach:** CSS modules, tokens in `src/renderer/theme/tokens.css`
- **UI state management:** Zustand store per show
- **Routing / navigation:** react-router inside the renderer (`/shows`, `/shows/:id`), no application menu beyond Electron's default
- **i18n:** react-i18next, keys `screen.element.purpose`
- **UI testing:** Playwright (Electron driver)

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Shows | `/shows`, the window's first view | src/renderer/screens/Shows.tsx | open a show | |
| Show | `/shows/:id`, row of the Shows list | src/renderer/screens/Show.tsx | read and edit the cue list of one show | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| CueRow | src/renderer/components/CueRow.tsx | one cue of the list | default, selected, editing |
| Toolbar | src/renderer/components/Toolbar.tsx | the actions of the current screen | default |

## Interaction patterns in use

- the current screen's actions live in the Toolbar; none of them is in the application menu
- Cmd/Ctrl+Z only works inside a text field (Electron's default Edit menu); the app has no undo of its own
- the window closes immediately on Cmd/Ctrl+W and on the title-bar close button

## Known gaps

- no application menu: Electron's default menu, with no app action in it
- the Shows list is reached only through the renderer's routes
