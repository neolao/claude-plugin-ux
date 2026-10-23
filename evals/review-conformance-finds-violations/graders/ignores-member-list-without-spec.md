---
type: llm
focus: last_message
criteria: |
  fixtures/src/MemberList.tsx (the Members panel) renders a list with no
  empty, loading or error state and has no spec of its own: no
  .ux/screens/*.md covers it, and the flow only names its Invite button,
  which opens the dialog as step 1 says.
  PASS if no finding has MemberList.tsx as its code location (naming it in
  the closing line as not covered by any spec is fine).
  FAIL if a finding targets MemberList.tsx.
weight: 1
---

Does not turn an unspecified screen into a conformance finding.
