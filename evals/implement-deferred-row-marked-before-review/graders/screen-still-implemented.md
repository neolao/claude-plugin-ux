---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/screens/board-detail.md has `status: validated`; a
  deferred row does not keep a built screen from being implemented.
  PASS if the printed .ux/screens/board-detail.md has `status: implemented`.
  FAIL otherwise.
weight: 1
---

A deferred row does not block the screen's implemented status.
