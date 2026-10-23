---
type: llm
focus: last_message
criteria: |
  Every library change goes through the document's QUndoStack; the rough
  option keeps the duplicate off it behind a 5-second "Remove duplicate"
  banner.
  PASS if a REQUIREMENTS entry demands that the duplicate be pushed on the
  undo stack and undone with Edit > Undo (Cmd/Ctrl+Z), or flags the banner
  as a separate undo path.
  FAIL otherwise.
weight: 1
---

Registers the mutation with the host's undo stack.
