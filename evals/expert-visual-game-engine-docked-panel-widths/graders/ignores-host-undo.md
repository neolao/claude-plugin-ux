---
type: llm
focus: last_message
criteria: |
  The intensity edit bypasses Undo.RecordObject — the host undo stack is
  expert-platform's domain.
  PASS if no REQUIREMENTS entry demands that the edit register with
  Undo.RecordObject or the editor's undo stack.
  FAIL if a REQUIREMENTS entry requires the undo registration.
weight: 1
---

Leaves the host undo stack to expert-platform.
