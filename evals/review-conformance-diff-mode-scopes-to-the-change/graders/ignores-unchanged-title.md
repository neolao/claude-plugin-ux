---
type: llm
focus: last_message
criteria: |
  `"invite.title": "Invite people"` in fixtures/src/i18n.ts differs from
  the spec's "Invite a member", but that line is neither added nor modified
  by the change — it appears only as context.
  PASS if no finding reports the dialog title or `invite.title`.
  FAIL if one does.
weight: 1
---

Does not report a pre-existing divergence on an unchanged line.
