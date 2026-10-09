---
type: llm
focus: last_message
criteria: |
  fixtures/src/InviteForm.tsx has a submit button that is neither disabled
  nor changed while the request is in flight, so the form can be submitted
  several times.
  PASS if a finding targets InviteForm.tsx for the missing in-progress state
  or double-submit protection.
  FAIL otherwise.
weight: 1
---

Reports the missing loading / double-submit guard.
