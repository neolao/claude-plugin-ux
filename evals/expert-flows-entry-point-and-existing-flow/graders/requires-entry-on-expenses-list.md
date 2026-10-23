---
type: llm
focus: last_message
criteria: |
  The accountant is on the Expenses list when the receipts arrive; the
  rough option starts the flow on a new page reached from Settings > Imports.
  PASS if a REQUIREMENTS or RISKS entry says the flow must start from the
  Expenses list (or an expense row or its side panel) rather than from
  Settings, or flags Settings > Imports as the wrong entry point.
  FAIL otherwise.
weight: 1
---

Starts the flow where the user is, not on a page under Settings.
