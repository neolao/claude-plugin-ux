---
type: llm
focus: last_message
criteria: |
  The view refreshes every 10 s and shows nothing between two refreshes.
  Whether a progress or loading state exists between refreshes and its
  timing is expert-states' domain.
  PASS if no REQUIREMENTS entry prescribes the refresh interval, a
  spinner or indicator between refreshes, or feedback timing.
  FAIL if a REQUIREMENTS entry prescribes one of those.
weight: 1
---

Does not prescribe feedback timing or which states exist.
