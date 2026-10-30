---
type: llm
focus: last_message
criteria: |
  `"invite.title": "Invite people"` in fixtures/src/i18n.ts differs from
  the spec's "Invite a member", but that line is neither added nor modified
  by the change — it appears only as context.
  PASS if no finding block (SPEC/CODE/SEVERITY/KIND/ISSUE/FIX) reports the
  dialog title or `invite.title` (naming it in the closing line as out of
  scope is fine).
  FAIL if a finding block does.
weight: 1
---

Does not report a pre-existing divergence on an unchanged line.
