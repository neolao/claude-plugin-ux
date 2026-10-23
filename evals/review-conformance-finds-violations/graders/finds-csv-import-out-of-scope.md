---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/flows/001-invite-member.md § Out of scope excludes bulk
  invitation from a CSV file, and no spec mentions it.
  fixtures/src/InviteMemberDialog.tsx renders a CSV file input that calls
  `importMembersCsv`.
  PASS if a finding reports the CSV import as an addition the spec does not
  mention or the flow excludes (KIND extra, or words to that effect).
  FAIL otherwise.
weight: 1
---

Reports the control the flow deliberately left out.
