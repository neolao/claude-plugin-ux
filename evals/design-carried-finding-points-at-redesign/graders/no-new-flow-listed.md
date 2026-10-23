---
type: llm
focus: last_message
criteria: |
  The fixture has one flow file, .ux/flows/001-rename-from-board.md, no
  .ux/screens/ and no .ux/decisions/.
  PASS if the printed listing shows only 001-rename-from-board.md under
  .ux/flows/ and "none" (or nothing) for .ux/screens/ and
  .ux/decisions/.
  FAIL if a second flow, a screen spec or a decision file is listed.
weight: 1
---

No second flow for a finding flow 001 already carries.
