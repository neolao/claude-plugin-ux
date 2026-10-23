---
type: llm
focus: last_message
criteria: |
  src/settings/SettingsBoards.tsx confirms "Delete permanently" with
  ConfirmDialog, whose body says the board and all its cards are deleted for
  good and that this cannot be undone — the irreversible, costly case where
  a confirmation naming the consequence is right, and the pattern the
  inventory lists.
  PASS if no finding asks to replace that confirmation with undo, to drop
  it, or calls it an unnecessary "Are you sure?".
  FAIL if one does.
weight: 1
---

Leaves the right confirmation alone.
