# Product — Ledgerly

Ledgerly is a web application where accountants keep the books of small firms: expenses, receipts, monthly close.

## Platform & surface

- **Platform:** web
- **Devices & input:** desktop browser, mouse + keyboard, two monitors at the desk
- **Runs with:** `npm run dev`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Accountant | expert | daily, several hours | at the desk, under time pressure at month end | close every client's month with no missing document |

## Jobs to be done

1. When a client sends receipts, the accountant wants to attach them to the matching expenses, so that the month closes without missing documents.
2. When the month ends, the accountant wants to see which expenses still lack a receipt, so that they can chase the client.

## Constraints

- **Brand / design system:** in-house `components/`
- **Accessibility target:** WCAG 2.2 AA
- **Localization:** English, French
- **Performance / offline / other:** none stated

## Vocabulary

- **Expense:** one line of spending, with a date, an amount and a supplier.
- **Receipt:** the document that proves an expense; attached to exactly one expense.
