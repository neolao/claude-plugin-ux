---
type: llm
focus: last_message
criteria: |
  A visual-direction decision is written from templates/decision.md
  with `flow: none`; the rejected directions include the current system.
  PASS if a decision file is printed under .ux/decisions/ whose
  frontmatter has `flow: none`, whose Options considered (or Decision /
  Reason text) names keeping the current system as an option not
  chosen, and whose number (NNN) is the one the printed style.md
  `decision:` field carries.
  FAIL if no decision file is printed, if `flow:` is not none, if the
  current system is not among the options, or if style.md `decision:`
  is none, a placeholder, or another number.
weight: 1
---

The rejected directions are recorded and style.md points at the record.
