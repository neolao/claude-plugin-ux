---
type: llm
focus: last_message
criteria: |
  The inventory's Screens table gives "Board detail" the Source
  src/boards/BoardDetail.tsx.
  PASS if the audit's Scope (in the final report or the printed file's
  header) names src/boards/BoardDetail.tsx or the Board detail screen
  alone — not the whole UI, not src/.
  FAIL otherwise.
weight: 1
---

States the resolved scope.
