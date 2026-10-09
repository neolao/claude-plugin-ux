---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/ProjectPage.tsx a <ul> rendering
  `members.map` with no empty case.
  PASS if a finding targets that member list for the missing empty state.
  FAIL otherwise.
weight: 1
---

Reports the member list added without an empty state.
