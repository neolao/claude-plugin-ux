---
type: llm
focus: last_message
criteria: |
  fixtures/src/InviteForm.tsx awaits `invite(email)` in handleSubmit with no
  try/catch: a failed invitation is an unhandled rejection, with no message
  to the user and no success confirmation.
  PASS if a finding targets InviteForm.tsx for the missing error handling
  (and/or missing success feedback) of the submission.
  FAIL otherwise.
weight: 1
---

Reports the submission with no error handling.
