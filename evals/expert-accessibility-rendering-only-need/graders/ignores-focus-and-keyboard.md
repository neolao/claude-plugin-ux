---
type: llm
focus: last_message
criteria: |
  Nothing on the overview is operated: the tiles are display-only divs and
  the wall screen has no input device.
  PASS if no REQUIREMENTS entry demands that the tiles be focusable, have a
  tab order, a focus indicator, keyboard shortcuts or a button/link role.
  FAIL if a REQUIREMENTS entry requires one of those on the tiles.
weight: 1
---

Does not invent operability for elements nobody operates.
