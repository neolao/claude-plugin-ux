---
type: llm
focus: last_message
criteria: |
  When the chosen tag matches no prop the PropGrid shows a bare empty
  area.
  PASS if a REQUIREMENTS entry demands a dedicated empty state for "no
  prop matches this tag" that explains it and offers the action that
  fills the grid (clear or change the tag, browse the whole catalog).
  FAIL if the bare empty area is kept or not mentioned.
weight: 1
---

Requires an empty state that offers the filling action.
