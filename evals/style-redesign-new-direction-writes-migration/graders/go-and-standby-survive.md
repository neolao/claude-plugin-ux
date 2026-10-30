---
type: llm
focus: last_message
criteria: |
  The owner said the green GO (#15803d) and amber standby (#b45309)
  colors must survive the redesign; tokens.css defines them as
  --color-go and --color-standby.
  PASS if the printed .ux/style.md Palette table carries #15803d and
  #b45309 (as Light values of semantic, go / standby or success /
  warning rows).
  FAIL if either color is replaced by another value or absent from the
  Palette.
weight: 1
---

What the interview settled as surviving is kept, as given.
