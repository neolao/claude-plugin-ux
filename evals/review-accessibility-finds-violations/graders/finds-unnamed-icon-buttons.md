---
type: llm
focus: last_message
criteria: |
  fixtures/src/CardToolbar.tsx has two buttons whose only content is an SVG
  icon, with no accessible name.
  PASS if a finding targets CardToolbar.tsx for missing accessible names on
  the icon-only buttons.
  FAIL otherwise.
weight: 1
---

Reports the icon-only buttons without a name.
