---
type: llm
focus: last_message
criteria: |
  src/boards/BoardList.tsx (the Boards list, another screen of the
  inventory) renders its list with no empty case. It is outside the
  requested scope.
  PASS if no finding reports the Boards list's missing empty state.
  FAIL if one does.
weight: 1
---

Leaves another screen's defect out of a scoped audit.
