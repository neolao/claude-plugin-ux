---
type: llm
focus: last_message
criteria: |
  The owner took a new direction: style.md is the adopted reference
  until the tokens are migrated.
  PASS if the printed .ux/style.md frontmatter has `status: adopted`
  and `mode: redesign`.
  FAIL if `status:` is `documented` (or anything but adopted), or
  `mode:` is not redesign.
weight: 1
---

A new direction is adopted, not documented.
