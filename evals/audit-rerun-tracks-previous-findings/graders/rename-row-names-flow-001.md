---
type: llm
focus: last_message
criteria: |
  The rename detour (renaming only reachable through Settings while the job
  arises on the board) is still in the code, and
  .ux/flows/001-rename-from-board.md carries it: `finding: F3 (audit
  2026-09-14)`, status designed.
  PASS if the new report keeps a finding for the rename detour and its
  Recommendation (or Issue) names flow 001 / "Rename a board from the
  board" as the design already made for it.
  FAIL if the rename detour is absent, or its row does not mention that
  flow.
weight: 1
---

Keeps a persisting finding and points at the flow that already carries it.
