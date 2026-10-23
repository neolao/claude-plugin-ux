---
type: llm
focus: last_message
criteria: |
  Only .ux/screens/settings-boards.md has a source: (src/settings/
  SettingsBoards.tsx); src/boards/BoardList.tsx, src/boards/BoardDetail.tsx
  and src/boards/BoardArchived.tsx have no spec with a source: (board-
  detail.md exists but its source: is empty and its status is validated).
  PASS if the final report, outside its numbered findings (a "Not
  assessed" section or an equivalent line), names at least one of those
  three files or screens (Boards list, Board detail, Board archived) as not
  covered by a spec / not assessable for conformance.
  FAIL if the report says nothing about screens or files no spec covers.
weight: 1
---

Carries review-conformance's closing line into the report.
