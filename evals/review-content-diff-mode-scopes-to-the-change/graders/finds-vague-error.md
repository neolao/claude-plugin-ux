---
type: llm
focus: last_message
criteria: |
  fixtures/locales/en.json line 6 adds `invoice.error` = `Invalid input`:
  no cause and no next step.
  PASS if a finding targets that message as vague / unhelpful.
  FAIL otherwise.
weight: 1
---

Reports the vague error string added by the change.
