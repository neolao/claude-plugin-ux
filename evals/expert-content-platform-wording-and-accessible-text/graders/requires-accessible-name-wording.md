---
type: llm
focus: last_message
criteria: |
  The icon-only remove button has the accessible name "trash-icon".
  PASS if the reply requires a name that says the action (for example
  "Remove from selection" or "Remove <fixture name> from selection") and
  flags "trash-icon".
  FAIL otherwise.
weight: 1
---

Names the icon-only control by its action, not its icon.
