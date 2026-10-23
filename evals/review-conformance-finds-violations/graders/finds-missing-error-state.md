---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/invite-member.md § States lists an Error row (the
  server refused or the network failed → the generic error under the email
  field, the address kept), and the flow's "Error at step 2" path says the
  same. fixtures/src/InviteMemberDialog.tsx awaits `invite(email)` with no
  try/catch and renders no error message: `invite.error.generic` is never
  used.
  PASS if a finding reports the Error state of invite-member (or the
  error-at-step-2 path) as missing or unhandled in InviteMemberDialog.tsx.
  FAIL otherwise.
weight: 1
---

Reports the specified Error state that has no code path.
