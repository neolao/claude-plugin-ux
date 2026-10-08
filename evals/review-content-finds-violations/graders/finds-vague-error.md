---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardList.tsx shows `Something went wrong` to the user when
  loading boards fails: no cause, no next step (and also a literal outside
  the i18n layer).
  PASS if a finding targets that message as vague / unhelpful.
  FAIL otherwise.
weight: 1
---

Reports the unhelpful error message.
