---
type: llm
focus: last_message
criteria: |
  The product is a touch-only phone app with no external keyboard.
  PASS if no REQUIREMENTS entry demands keyboard shortcuts, accelerators or
  a tab order for this need.
  FAIL if a REQUIREMENTS entry requires keyboard shortcuts or a tab order.
weight: 1
---

Does not impose desktop keyboard rules on a touch-only phone app.
