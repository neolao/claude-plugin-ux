---
type: llm
focus: last_message
criteria: |
  The direction states a 4 px base with the scale 4 / 8 / 12 / 16 / 24 /
  32, then pads the board's cells 10 px and the page gutters 14 px.
  PASS if the reply flags the 10 px cell padding and/or the 14 px gutters
  as off the direction's own spacing scale, or requires them to be moved
  onto it.
  FAIL if neither value is mentioned.
weight: 1
---

Flags a value that breaks the direction's own scale.
