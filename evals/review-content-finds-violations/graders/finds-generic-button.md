---
type: llm
focus: last_message
criteria: |
  fixtures/src/CardDialog.tsx renders a button whose label is the literal
  `OK`.
  PASS if a finding targets that `OK` button label (generic label and/or
  hardcoded).
  FAIL otherwise.
weight: 1
---

Reports the generic OK button.
