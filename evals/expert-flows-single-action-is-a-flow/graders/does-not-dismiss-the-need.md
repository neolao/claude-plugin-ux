---
type: llm
focus: last_message
criteria: |
  The rough option calls the need "a single button, not a flow", but a
  single action still has an entry, a landing and a cancel.
  PASS if the reply contains a REQUIREMENTS list with at least one entry
  about where the export starts, where the designer lands or how it is
  stopped.
  FAIL if the reply says the need raises no flow concern, or has no
  REQUIREMENTS entry.
weight: 1
---

Still prescribes on a single-action need.
