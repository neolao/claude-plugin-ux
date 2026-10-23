---
type: llm
focus: last_message
criteria: |
  When the phone is locked or the app is killed mid-upload, the next
  Send uploads all forty photos again.
  PASS if a REQUIREMENTS or SCENARIOS entry says that after the app is
  backgrounded or killed the report shows what was sent and what remains,
  and the next send (automatic or manual) uploads only the photos not yet
  received — nothing already sent is redone.
  FAIL otherwise.
weight: 1
---

Resumes after an interruption without redoing what was done.
