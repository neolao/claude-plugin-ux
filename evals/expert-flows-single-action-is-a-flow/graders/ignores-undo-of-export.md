---
type: llm
focus: last_message
criteria: |
  The export writes a file and changes nothing in the scene; there is
  nothing to undo, and the editor's undo stack is expert-platform's domain.
  PASS if no REQUIREMENTS entry demands that the export be undoable, be
  registered with the editor's undo stack, or be reverted with Ctrl/Cmd+Z.
  FAIL if a REQUIREMENTS entry requires one of those.
weight: 1
---

Does not prescribe undo where nothing changes.
