---
type: llm
focus: last_message
criteria: |
  The dialog is titled "Are you sure?" and confirms with "OK".
  PASS if the reply requires a verb + object label in place of "OK" (for
  example "Export 12 fixtures") or a title that states the task in place
  of "Are you sure?" (either one is enough).
  FAIL otherwise.
weight: 1
---

Replaces OK and the question title with labels that say what happens.
