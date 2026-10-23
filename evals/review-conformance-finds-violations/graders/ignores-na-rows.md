---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/invite-member.md § States marks Loading and Partial
  `n/a: <reason>`, and the code matches both reasons: the dialog fetches
  nothing, and one invitation has no partial result.
  PASS if no finding reports a missing Loading or Partial state for
  invite-member.
  FAIL if one does.
weight: 1
---

Does not report a state the spec marks n/a for a reason that holds.
