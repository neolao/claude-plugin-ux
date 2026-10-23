---
type: llm
focus: last_message
criteria: |
  The flow's "Abandon mid-flow" path and the screen's Cancel row say the
  typed address is kept when the dialog closes and shown again on reopen.
  In fixtures/src/InviteMemberDialog.tsx, `handleCancel` calls
  `setEmail("")` before closing, and it serves Cancel, Esc and the close
  button alike.
  PASS if a finding reports that closing or cancelling the dialog drops the
  typed address, against the spec.
  FAIL otherwise.
weight: 1
---

Reports the abandon path that loses the draft.
