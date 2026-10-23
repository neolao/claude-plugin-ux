---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/screens/board-detail.md has `status: implemented`
  and `source: src/boards/BoardDetail.tsx`; the redesign changes its
  rename interactions.
  PASS if the printed board-detail spec has `status: designed`,
  `flow: 001` and still `source: src/boards/BoardDetail.tsx`, and its
  Interactions table says that leaving the input (blur, focus leaves, a
  click elsewhere) saves the name while Escape cancels.
  FAIL if the status is still implemented, if `source:` was emptied, or
  if the Interactions rows still say that focus leaving restores the
  previous name.
weight: 1
---

The changed screen goes back to designed so /ux:implement builds it, with its source kept.
