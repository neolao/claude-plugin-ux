---
type: llm
focus: last_message
criteria: |
  src/boards holds exactly three source files: BoardArchived.tsx,
  BoardDetail.tsx and BoardList.tsx. The captures folder holds three PNG
  files, which are evidence, not files under review.
  PASS if the report's Files count is 3, or the files it lists as reviewed
  are only those three .tsx files.
  FAIL if a .png is counted or listed among the files in scope, or if the
  Files count is 6.
weight: 1
---

Keeps the captures as evidence, not as files in scope.
