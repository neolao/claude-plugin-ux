---
type: llm
focus: last_message
criteria: |
  src/boards/BoardList.tsx still renders its list with no empty case; the
  previous inventory recorded it under Known gaps as added by the
  2026-09-14 audit.
  PASS if the printed .ux/inventory.md Known gaps still has a line about
  the Boards list lacking an empty state, naming BoardList.tsx.
  FAIL if that gap is gone.
weight: 1
---

Carries over a gap another command added while it is still true.
