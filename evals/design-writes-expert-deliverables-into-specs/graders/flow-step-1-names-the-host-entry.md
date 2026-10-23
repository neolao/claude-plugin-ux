---
type: llm
focus: last_message
criteria: |
  The inventory's Interaction patterns say every preset action is in the
  Preset menu with its accelerator and in the preset's right-click
  context menu; the owner put Duplicate there too.
  PASS if, in the printed flow file, step 1 of the Flow table (its "User
  does" cell, or the step's text) names the Preset menu item and/or the
  context-menu entry on the selected preset as how the duplicate is
  triggered — an accelerator (Cmd/Ctrl+D or another) is a plus, not
  required.
  FAIL if step 1 only says "duplicates the preset" or "clicks Duplicate"
  without naming the menu or the context menu, or if the entry is a
  toolbar icon or a new screen.
weight: 1
---

The entry's platform form is written where /ux:implement and review-conformance read it.
