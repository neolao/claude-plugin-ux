---
type: llm
focus: last_message
criteria: |
  The fixture's inventory lists the toast row with "States / variants
  supported" = `success`, `error`.
  PASS if the printed .ux/inventory.md toast row (or a row for the toast
  under another name) now also records the action / undo variant.
  FAIL if the toast row is unchanged or gone.
weight: 1
---

Records the variant it added so that discover's refresh keeps it.
