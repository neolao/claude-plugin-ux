---
type: llm
focus: last_message
criteria: |
  PASS if the skill's final report names /ux:style as the next command
  and /ux:design after it.
  FAIL if it suggests /ux:audit, or names /ux:design without /ux:style
  before it.
weight: 1
---

Sends a UI-less project to the commands that create one.
