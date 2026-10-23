---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/invite-member.md § Content gives the key
  `invite.send` the text "Send invitation"; fixtures/src/i18n.ts defines it
  as "Invite member", which is what the submit button of
  InviteMemberDialog.tsx shows.
  PASS if a finding reports the Send button's text (or the `invite.send`
  string) as differing from the spec.
  FAIL otherwise.
weight: 1
---

Reports the action label that differs from the Content table.
