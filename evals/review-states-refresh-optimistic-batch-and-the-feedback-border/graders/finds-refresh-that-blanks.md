---
type: llm
focus: last_message
criteria: |
  fixtures/src/MemberList.tsx wires its Refresh button to `load`, which
  calls `setMembers(null)` before refetching: the list already on screen
  is replaced by "Loading members…" on every refresh.
  PASS if a finding targets MemberList.tsx for the refresh that blanks
  (clears, hides, replaces with the loading state) the content already
  shown instead of keeping it marked as updating.
  FAIL otherwise.
weight: 1
---

Reports the refresh that blanks the list it refreshes.
