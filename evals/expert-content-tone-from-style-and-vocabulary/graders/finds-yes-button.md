---
type: llm
focus: last_message
criteria: |
  The primary button of the rough option is labeled "Yes!".
  PASS if the reply requires a verb + object label for it (for example
  "Mark as received", "Confirm delivery", "Receive delivery") or flags
  "Yes!" as not saying what happens.
  FAIL otherwise.
weight: 1
---

Replaces "Yes!" with a label that says what happens.
