---
type: llm
focus: last_message
criteria: |
  The toast says "Conflict! Someone changed this." Its wording is
  expert-content's domain.
  PASS if no REQUIREMENTS entry rewrites the toast's text or prescribes
  the words of any message. Requiring that the message say what happened
  and what to do next, or sit at the row rather than in a toast, is fine
  — that is what the state shows, not its words.
  FAIL if a REQUIREMENTS entry proposes other wording or judges the
  words themselves.
weight: 1
---

Leaves the wording of the conflict message to expert-content.
