---
type: llm
focus: last_message
criteria: |
  The flow template's `prototype:` is a placeholder "[.ux/prototypes/…
  once built]"; no prototype exists yet. The decision is numbered from
  .ux/decisions/, which is empty.
  PASS if the printed flow file has `prototype: none` (not the
  bracketed placeholder, not an invented path) and `decision:` names
  the number of the printed decision file, whose frontmatter has
  `flow:` set to the flow's id.
  FAIL if `prototype:` keeps the placeholder or names a file that was
  never written, or if `decision:` and the decision file do not point
  at each other.
weight: 1
---

No placeholder left for prototype, and the flow and its decision reference each other.
