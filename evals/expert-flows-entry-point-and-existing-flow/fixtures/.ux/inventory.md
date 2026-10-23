# UI inventory — Ledgerly

## UI stack

- **Framework / UI layer:** React 18 + TypeScript
- **Component library / design system:** in-house `src/components/`
- **Routing / navigation:** react-router
- **i18n:** react-i18next, keys `screen.element`

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Expenses list | `/expenses` (main nav) | src/pages/Expenses.tsx | browse and edit the month's expenses | |
| Expense side panel | opens over the list on row click | src/components/ExpenseSidePanel.tsx | edit one expense without leaving the list | |
| Monthly close | `/close` (main nav) | src/pages/Close.tsx | check and close the month | |
| Settings | `/settings` (user menu) | src/pages/Settings.tsx | firm details, users, integrations | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| ExpenseRow | src/components/ExpenseRow.tsx | one expense in the list | default, selected, missing-receipt |
| ExpenseSidePanel | src/components/ExpenseSidePanel.tsx | edit one expense in place | default, saving |
| FileDrop | src/components/FileDrop.tsx | drop zone for one or several files | idle, over, uploading |
| Toast | src/components/Toast.tsx | confirmations with an optional undo | info, success |

## Interaction patterns in use

- editing happens in the side panel, the list stays visible behind it
- an action that changes data is confirmed by a toast with "Undo" for 10 s; no confirmation dialogs
- files are attached by dropping them on their target (FileDrop)
