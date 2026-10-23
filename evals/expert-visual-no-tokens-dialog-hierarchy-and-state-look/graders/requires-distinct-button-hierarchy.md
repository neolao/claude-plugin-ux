---
type: llm
focus: last_message
criteria: |
  "Keep" and "Archive client" share the same filled primary style, so no
  action is visually dominant and the destructive one is styled as
  primary.
  PASS if a REQUIREMENTS entry demands that the two buttons differ —
  "Keep" demoted to the secondary style and/or "Archive client" in a
  destructive style rather than the primary one — so that one action
  reads as dominant.
  FAIL if both buttons may keep the same style, or the point is not
  mentioned.
weight: 1
---

Separates the two same-styled buttons.
