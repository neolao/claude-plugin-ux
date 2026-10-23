# UI inventory — Fixturelab

## UI stack

- **Framework / UI layer:** Electron + React 18 + TypeScript
- **Component library / design system:** in-house `src/ui/`
- **Routing / navigation:** native menus + views, no URLs
- **i18n:** hardcoded strings (English)

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Patch view | Show > Patch | src/patch/PatchView.tsx | the patch table, the designer's main screen | |
| Import dialog | File > Import… | src/import/ImportDialog.tsx | bring external data into the show | |
| Show settings | Show > Settings… | src/show/SettingsDialog.tsx | name, venue, universes | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Wizard | src/ui/Wizard.tsx | multi-step dialogs with Next and Back | step n of N, last step |
| Dialog | src/ui/Dialog.tsx | modal dialogs | default, destructive |
| Toast | src/ui/Toast.tsx | confirmations | info, success |

## Interaction patterns in use

- every change to the patch is undone with Edit > Undo (Cmd/Ctrl+Z), 50 levels, one level per user action
- a completed action is confirmed by a toast; no confirmation dialogs except before deleting a show
