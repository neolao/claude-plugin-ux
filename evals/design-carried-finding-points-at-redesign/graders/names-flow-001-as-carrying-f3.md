---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/flows/001-rename-from-board.md has
  `finding: F3 (audit 2026-09-14)` in its frontmatter and
  `status: designed`; the latest audit's F3 is the rename detour.
  PASS if the skill's repeated last message says flow 001 (by id, file
  name or title "Rename a board from the board") already carries or
  addresses finding F3, and names `/ux:design 001` (or an equivalent
  redesign of that flow) as the command to run.
  FAIL if it does not name flow 001, or treats F3 as a new need to
  design.
weight: 1
---

A finding a flow already carries is that flow's redesign, not a second flow.
