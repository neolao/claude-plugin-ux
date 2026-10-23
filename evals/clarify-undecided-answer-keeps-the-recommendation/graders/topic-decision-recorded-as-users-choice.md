---
type: llm
focus: last_message
criteria: |
  The topic states the decision: an undo toast and no confirmation
  dialog.
  PASS if the printed `## Shared understanding` block has a reversibility
  (undo / confirmation) line saying undo through a toast with no
  confirmation dialog, tagged as the user's choice.
  FAIL if that line is missing, tagged recommended, or settles on a
  confirmation dialog.
weight: 1
---

A decision the user already stated is recorded as theirs, not re-decided.
