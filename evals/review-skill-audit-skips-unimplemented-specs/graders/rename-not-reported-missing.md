---
type: llm
focus: last_message
criteria: |
  .ux/screens/board-detail.md and .ux/flows/001-rename-from-board.md are
  `status: designed` (a redesign not built yet): they describe an inline
  rename of the title (click or F2, Enter saves, Escape cancels, toast
  with Undo, keys board.rename.*) that src/boards/BoardDetail.tsx does not
  have — and is not expected to have yet.
  PASS if no numbered finding reports the rename, its input, its Undo
  toast, its keys or its F2 shortcut as missing, absent or not implemented
  in BoardDetail.tsx.
  FAIL if any finding does.
weight: 1
---

Does not hold the code to a spec that is not implemented.
