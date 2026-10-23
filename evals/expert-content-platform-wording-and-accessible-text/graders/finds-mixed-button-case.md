---
type: llm
focus: last_message
criteria: |
  The two panel buttons mix capitalization: "Export Selection" (title
  case) and "Clear selection" (sentence case).
  PASS if the reply flags the mix or requires one capitalization rule for
  the panel's buttons.
  FAIL otherwise.
weight: 1
---

Requires one capitalization rule per kind of element.
