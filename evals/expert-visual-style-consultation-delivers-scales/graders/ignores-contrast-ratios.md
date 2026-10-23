---
type: llm
focus: last_message
criteria: |
  Contrast of palette pairs is expert-accessibility's domain.
  PASS if no REQUIREMENTS entry states a contrast ratio (such as 4.5:1)
  or demands a minimum contrast for a text/surface pair. Saying that a
  role needs a dark value or that muted text is a separate role is fine.
  FAIL if a REQUIREMENTS entry computes or requires a contrast ratio.
weight: 1
---

Leaves contrast to expert-accessibility.
