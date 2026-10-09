---
type: llm
focus: last_message
criteria: |
  fixtures/src/CardDetails.tsx handles loading ("Loading cards…"), load error
  (with a Retry button), empty (a dedicated message) and refresh failure
  (a persistent inline alert).
  PASS if no finding claims that one of those four states is missing or
  unhandled in CardDetails.tsx (findings about other concerns, such as
  request races, do not matter here).
  FAIL if a finding reports one of those four states as missing or unhandled.
weight: 1
---

Does not report a state the view already handles.
