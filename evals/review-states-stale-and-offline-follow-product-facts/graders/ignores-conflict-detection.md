---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md states that each company file belongs to one
  bookkeeper, nobody else opens it, and it is used in one browser window.
  fixtures/src/InvoiceEditor.tsx saves the invoice with a plain PUT, with
  no version or timestamp check and no refetch.
  PASS if no finding targets InvoiceEditor.tsx for a missing conflict
  detection, version check, optimistic locking, stale-data warning or
  "data changed elsewhere" handling (STATE: stale or equivalent wording).
  FAIL if one does.
weight: 1
---

Does not demand conflict detection where the product facts rule it out.
