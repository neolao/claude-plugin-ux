---
type: llm
focus: last_message
criteria: |
  Success is "every receipt shows on its expense row in the Expenses list";
  the rough option's "Done" button takes the accountant back to Settings.
  PASS if a REQUIREMENTS or SCENARIOS entry says that after matching the
  accountant lands on the Expenses list (or on the expenses with their
  receipts visible), not on Settings.
  FAIL otherwise.
weight: 1
---

Lands the user where the result is visible.
