---
type: llm
focus: last_message
criteria: |
  The rough option says nothing changes on screen while the request runs.
  Whether a loading or pending state exists is expert-states' domain; the
  content expert owns only the wording of the states the screen has.
  PASS if no REQUIREMENTS entry demands a loading state, a spinner, a
  progress indicator, a disabled-while-pending button or feedback timing.
  FAIL if a REQUIREMENTS entry requires one of those.
weight: 1
---

Does not prescribe which states exist.
