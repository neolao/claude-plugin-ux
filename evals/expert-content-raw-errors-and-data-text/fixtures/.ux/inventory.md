# Inventory

## UI stack
Electron 30 + React 18 + TypeScript, CSS modules. i18n: i18next, keys `screen.element.purpose`, ICU plurals, source strings in `src/locales/en.json`, French in `src/locales/fr.json`. API errors arrive as `{ status, code, message, details[] }` where `code` is a stable machine identifier (for example `csv.invalid_email`) and `message` is a developer-facing English sentence.

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Member list | main window | src/views/MemberList.tsx | all contacts, search, dues status | — |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Toast | src/components/Toast.tsx | success and failure messages | success, error |
| ReviewPanel | src/components/ReviewPanel.tsx | a list of rows to check before applying | default |

## Interaction patterns in use

- file choosing goes through the native OS dialog (Electron `dialog`), never a custom picker
- success and failure shown as a toast at the bottom of the window
