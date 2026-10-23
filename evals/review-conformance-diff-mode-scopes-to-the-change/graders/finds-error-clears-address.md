---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/InviteMemberDialog.tsx a catch branch
  that calls `setEmail("")`, while the Error row of
  fixtures/.ux/screens/invite-member.md and the flow's "Error at step 2"
  path say the address stays in the field.
  PASS if a finding reports that the error handling clears or loses the
  typed address, against the spec.
  FAIL otherwise.
weight: 1
---

Reports the added error branch that diverges from the spec.
