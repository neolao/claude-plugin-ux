# UI inventory — Ledgerly

## UI stack

- **Framework / UI layer:** React 18 + TypeScript
- **Component library / design system:** in-house `src/ui/`
- **Routing / navigation:** react-router
- **i18n:** hardcoded strings (English)

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Invoice list | /invoices | src/invoices/InvoiceList.tsx | the invoices, the accountant's main screen | |
| Invoice | /invoices/:id | src/invoices/InvoicePage.tsx | one invoice and its payments | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| DataTable | src/ui/DataTable.tsx | sortable tables | loading (skeleton rows keeping the column widths), empty (hint + action slot), error (inline message + Retry) |
| FilterBar | src/ui/FilterBar.tsx | filters above a table | default |
| Toast | src/ui/Toast.tsx | confirmations | success, info |
| DateRange | src/ui/DateRange.tsx | from / to dates | default, invalid |

## Interaction patterns in use

- a failed request shows DataTable's inline error with Retry; nothing else is replaced
- a completed action is confirmed by a toast when its result is not on screen
- form fields are validated inline on blur, before any submit

## Known gaps

- FilterBar has no loading state: its controls stay clickable while the table reloads
