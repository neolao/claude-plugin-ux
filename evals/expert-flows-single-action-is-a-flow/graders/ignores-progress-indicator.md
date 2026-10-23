---
type: llm
focus: last_message
criteria: |
  Nothing on screen changes while the export runs for 10–20 s. Whether a
  loading or progress state exists and its timing is expert-states' domain.
  PASS if no REQUIREMENTS entry demands a progress bar, spinner,
  percentage, status-bar progress or feedback timing for the running
  export. Requiring a cancel control is fine.
  FAIL if a REQUIREMENTS entry requires one of those.
weight: 1
---

Does not prescribe which states exist or their feedback timing.
