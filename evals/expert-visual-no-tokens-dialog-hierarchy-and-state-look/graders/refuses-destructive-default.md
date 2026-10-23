---
type: llm
focus: last_message
criteria: |
  Enter triggers "Archive client", the destructive action of the dialog.
  PASS if a REQUIREMENTS or RISKS entry says the destructive action must
  not be the default (Enter) action — the default goes to "Keep" or there
  is none — or flags Enter on "Archive client" as a defect.
  FAIL if Enter may still trigger "Archive client", or the point is not
  mentioned.
weight: 1
---

Never makes the destructive action the default.
