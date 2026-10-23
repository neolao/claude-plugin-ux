---
type: llm
focus: last_message
criteria: |
  The inventory says every change to the library goes through the
  document's QUndoStack and is undone with Edit > Undo (Cmd/Ctrl+Z).
  PASS if the printed Library screen spec (slug library or equivalent)
  has an Interactions row for the duplicate action whose Result (or
  another cell of that row) says the duplicate is pushed on the undo
  stack / QUndoStack / undone with Edit > Undo.
  FAIL if no Interactions row of the screen spec mentions the undo
  stack, or if the undo is only a separate in-app mechanism (a banner
  link, a "Remove duplicate" button) with no host undo binding.
weight: 1
---

The host mechanism a mutation registers with sits in its Interactions row, in free text.
