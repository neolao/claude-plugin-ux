---
type: llm
focus: last_message
criteria: |
  The inventory's Design tokens table has `none` for every family and
  there is no .ux/style.md: the project has no scale.
  PASS if the skill's repeated last message says there are no tokens
  (or no scale) and recommends /ux:style.
  FAIL if it does not mention it, or if the skill stopped before
  building because of it.
weight: 1
---

Builds anyway and sends to /ux:style instead of stopping.
