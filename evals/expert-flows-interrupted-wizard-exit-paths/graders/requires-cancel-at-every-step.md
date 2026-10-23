---
type: llm
focus: last_message
criteria: |
  Past step 2 the Wizard has no Cancel button; closing the window is the
  only way out.
  PASS if a REQUIREMENTS entry demands a way out (Cancel, Back or Close
  within the Wizard) at every step, including steps 3 and 4.
  FAIL otherwise.
weight: 1
---

Requires cancel at every step.
