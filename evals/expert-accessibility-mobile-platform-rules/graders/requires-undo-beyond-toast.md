---
type: llm
focus: last_message
criteria: |
  Undo is offered only in a toast that disappears after 3 s.
  PASS if a REQUIREMENTS or RISKS entry says the 3 s toast is too short or
  that undo must remain reachable after the toast is gone (longer duration,
  no auto-dismiss until acted on, a persistent undo entry, a pause on
  focus/touch, or similar).
  FAIL otherwise.
weight: 1
---

Does not let undo live only in a 3 s toast.
