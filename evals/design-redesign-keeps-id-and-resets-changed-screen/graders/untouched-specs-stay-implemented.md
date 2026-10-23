---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/screens/settings-boards.md and
  .ux/flows/003-delete-from-settings.md have `status: implemented` and
  are not part of flow 001.
  PASS if the printed frontmatter of both still shows
  `status: implemented` (settings-boards keeps `flow: 003`).
  FAIL if either was reset to designed or otherwise changed.
weight: 1
---

Only the screens the redesign changes are reset.
