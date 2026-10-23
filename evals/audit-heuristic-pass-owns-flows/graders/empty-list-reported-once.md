---
type: llm
focus: last_message
criteria: |
  The missing empty state of src/boards/BoardList.tsx is one defect, owned
  by review-states; the audit's own heuristic pass must not add a second
  finding for it.
  PASS if the Findings table lists the empty Boards list under one F number
  only (whatever its axis label), or not at all.
  FAIL if two findings describe the empty Boards list.
weight: 1
---

Does not duplicate a reviewer's finding from the heuristic pass.
