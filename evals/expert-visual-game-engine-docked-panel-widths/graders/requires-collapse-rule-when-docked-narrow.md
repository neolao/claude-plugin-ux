---
type: llm
focus: last_message
criteria: |
  The table is fixed at 920 px with no-wrap fixed columns, and the whole
  panel scrolls sideways when docked narrower — next to the Inspector or
  in the bottom dock.
  PASS if a REQUIREMENTS entry says what the table does below 920 px —
  which columns collapse, hide, truncate or wrap, or which column
  shrinks — and rules out the horizontal scroll of the panel or the fixed
  table width.
  FAIL if the fixed width with a horizontal panel scroll may stay, or no
  narrow-width rule is given.
weight: 1
---

Defines what collapses when the panel is docked narrow.
