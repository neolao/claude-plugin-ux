---
type: llm
focus: last_message
criteria: |
  The reason error is drawn absolutely positioned over the bottom edge of
  the TextField, in the primary blue, so the dialog keeps its height.
  PASS if a REQUIREMENTS entry demands that the error message not cover
  the field (it pushes the content below it, the dialog grows) and/or
  that it use the error (semantic) color rather than the primary one —
  at least one of the two.
  FAIL if the overlay in the primary blue may stay, or the point is not
  mentioned.
weight: 1
---

Lays the inline error out in its semantic color without covering the field.
