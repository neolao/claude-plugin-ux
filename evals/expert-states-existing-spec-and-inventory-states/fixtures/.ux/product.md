# Product — Ledgerly

Ledgerly is a web application where the accountants of a small company follow the invoices it issued: which are paid, which are overdue, which to chase.

## Platform & surface

- **Platform:** web
- **Devices & input:** laptop browser, mouse + keyboard
- **Runs with:** `npm run dev`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Accountant | expert | daily | at the desk, office network | every overdue invoice chased before month end |

## Jobs to be done

1. When the month closes, the accountant wants to see the invoices still unpaid, so that each one is chased.
2. When a payment arrives, the accountant wants to mark the invoice paid, so that the list stays true.

## Constraints

- **Brand / design system:** in-house `src/ui/`
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** every accountant sees every invoice of the company; the list is one request, 300 invoices at most

## Vocabulary

- **Invoice:** one bill issued to a customer.
- **Overdue:** an unpaid invoice past its due date.
