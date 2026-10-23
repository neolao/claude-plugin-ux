---
type: llm
focus: last_message
criteria: |
  How the picker looks — its tint, colors, spacing, type — is
  expert-visual's domain.
  PASS if the reply does not prescribe colors, tokens, spacing or type
  for the picker. Naming the picker style the OS offers (compact, wheel,
  graphical) is fine — that is the control, not its styling.
  FAIL if the reply prescribes tokens, colors, spacing or type values.
weight: 1
---

Leaves the styling to expert-visual.
