---
type: llm
focus: last_message
criteria: |
  .ux/product.md § Jobs to be done places renaming a board at the moment
  the operator is looking at it, and the inventory enters Board detail from
  a row of the Boards list. src/boards/BoardDetail.tsx offers no way to
  rename the board; the only rename control is in
  src/settings/SettingsBoards.tsx, reached through the Settings link.
  PASS if a finding reports that renaming a board is not available from the
  board itself (Board detail) or is reachable only through Settings.
  FAIL otherwise.
weight: 1
---

Still finds the in-scope flow defect.
