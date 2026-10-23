---
type: llm
focus: last_message
criteria: |
  The change sets `invite.send` in fixtures/src/i18n.ts to "Invite";
  fixtures/.ux/screens/invite-member.md § Content gives it the text
  "Send invitation".
  PASS if a finding reports the Send button's text (or the `invite.send`
  string) as differing from the spec.
  FAIL otherwise.
weight: 1
---

Reports the action label the change moved away from the Content table.
