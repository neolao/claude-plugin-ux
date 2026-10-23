---
type: llm
focus: last_message
criteria: |
  The need has no interactive element, but it changes rendering: color,
  contrast and motion remain in the expert's domain.
  PASS if the reply contains a REQUIREMENTS list with at least one entry.
  FAIL if the reply says the need raises no accessibility concern, or has no
  REQUIREMENTS entry.
weight: 1
---

Still prescribes on a rendering-only need.
