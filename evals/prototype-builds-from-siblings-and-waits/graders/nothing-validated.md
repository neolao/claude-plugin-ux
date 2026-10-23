---
type: llm
focus: last_message
criteria: |
  The fixture's flow 001 and screen board-detail both have
  `status: designed`; the product owner never answered.
  PASS if the printed .ux/flows/001-rename-from-board.md and
  .ux/screens/board-detail.md both still have `status: designed`.
  FAIL if either has `status: validated` (or any other status).
weight: 1
---

Never marks a prototype validated on its own.
