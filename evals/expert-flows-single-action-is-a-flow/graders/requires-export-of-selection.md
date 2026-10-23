---
type: llm
focus: last_message
criteria: |
  The trigger is the designer's selection in the Hierarchy and the panel's
  other actions act on that selection; the rough option exports the whole
  scene whatever is selected.
  PASS if a REQUIREMENTS or RISKS entry says the export must act on the
  current selection (or offer selection versus whole scene), or flags
  ignoring the selection as a defect.
  FAIL otherwise.
weight: 1
---

Starts the action on the item in hand, not on the whole scene.
