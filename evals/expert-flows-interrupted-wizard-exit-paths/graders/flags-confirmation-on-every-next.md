---
type: llm
focus: last_message
criteria: |
  Every Next button opens a dialog "Are you sure you want to continue?"
  although moving to the next step changes nothing yet.
  PASS if the reply requires removing that dialog from the Next buttons,
  or says a confirmation belongs at most on the one step that commits the
  import, or flags the per-step confirmation as a defect.
  FAIL if the per-step dialogs are kept or not mentioned.
weight: 1
---

Does not confirm on every step.
