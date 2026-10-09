---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardList.tsx renders `boards.map` inside a <ul> with no branch
  for an empty array: zero boards gives an empty list with no guidance.
  PASS if a finding targets BoardList.tsx for the missing empty state.
  FAIL otherwise.
weight: 1
---

Reports the list without an empty state.
