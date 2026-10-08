---
type: llm
focus: last_message
criteria: |
  fixtures/src/InvoiceRow.tsx line 12 builds the issue date by hand from
  getDate()/getMonth()/getFullYear() instead of the project's `formatDate`.
  PASS if a finding targets that line as a hand-formatted date.
  FAIL otherwise.
weight: 1
---

Reports the hand-formatted date added by the change.
