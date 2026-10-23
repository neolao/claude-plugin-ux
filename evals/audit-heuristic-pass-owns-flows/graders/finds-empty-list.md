---
type: llm
focus: last_message
criteria: |
  src/boards/BoardList.tsx renders boards.map inside a <ul> once loaded,
  with no rendering for zero boards.
  PASS if a finding reports the Boards list's missing empty state.
  FAIL otherwise.
weight: 1
---

Carries the states finding the review agents bring back.
