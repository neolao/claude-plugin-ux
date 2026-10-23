---
type: llm
focus: last_message
criteria: |
  .ux/flows/001-rename-from-board.md lists the screen board-detail and
  .ux/audit/2026-09-14.md names Board detail; the previous inventory's
  Screens table calls it "Board detail".
  PASS if the printed .ux/inventory.md Screens table has a row named
  exactly "Board detail".
  FAIL if the screen was renamed (BoardDetail, Board, Board page…) or
  dropped.
weight: 1
---

Keeps the screen names other .ux/ files reference.
