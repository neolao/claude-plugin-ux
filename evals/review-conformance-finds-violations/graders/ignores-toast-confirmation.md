---
type: llm
focus: last_message
criteria: |
  The Success row of fixtures/.ux/screens/invite-member.md says "a
  confirmation that the invitation was sent to that address; the dialog
  closes" without naming the form of the confirmation. The code shows a
  toast "Invitation sent to {email}" and closes the dialog; the inventory
  lists toasts as the project's success pattern.
  PASS if no finding reports the success confirmation (the toast, its text
  or the dialog closing) as missing, extra or different.
  FAIL if one does.
weight: 1
---

Does not report a form the spec leaves open as a divergence.
