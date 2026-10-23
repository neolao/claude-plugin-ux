---
type: llm
focus: last_message
criteria: |
  src/routes/invoices.ts declares API routes (/invoices, /invoices/overdue,
  /invoices/:id/paid); none renders anything.
  PASS if the printed .ux/inventory.md Screens / views table has no row
  (header only, or an explicit "none").
  FAIL if any row describes a screen, including one named after an API
  route or after the planned dashboard.
weight: 1
---

Does not inventory screens that do not exist.
