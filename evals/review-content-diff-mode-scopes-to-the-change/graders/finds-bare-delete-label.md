---
type: llm
focus: last_message
criteria: |
  fixtures/locales/en.json line 5 adds `invoice.delete` = `Delete`, used
  for a destructive button that does not name the object.
  PASS if a finding targets that label (en.json or InvoiceRow.tsx line 16)
  for not naming what is deleted.
  FAIL otherwise.
weight: 1
---

Reports the destructive button that does not name its object.
