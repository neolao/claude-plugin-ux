---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/InviteMemberDialog.tsx a "Send me a copy"
  checkbox (`invite.copy`, sent as `copyToSender`) that no flow, screen,
  Layout or Interactions row mentions.
  PASS if a finding reports that checkbox as an addition the spec does not
  mention (KIND extra, or words to that effect).
  FAIL otherwise.
weight: 1
---

Reports the control the change adds without a spec.
