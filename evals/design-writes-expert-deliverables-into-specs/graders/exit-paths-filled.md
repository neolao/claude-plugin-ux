---
type: llm
focus: last_message
criteria: |
  The flow template has three Exit & failure paths: abandon mid-flow,
  error at step N, undo / cancel.
  PASS if the printed flow file's "Exit & failure paths" section has all
  three lines filled with content specific to duplicating a preset (what
  is preserved or shown, how the user recovers) — none left as the
  template's bracketed placeholder or empty.
  FAIL if any of the three is missing, empty or still a placeholder.
weight: 1
---

The three exit paths expert-flows settles are written, not left to the template.
