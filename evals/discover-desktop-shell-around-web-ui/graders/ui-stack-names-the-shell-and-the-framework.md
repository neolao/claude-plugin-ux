---
type: llm
focus: last_message
criteria: |
  PASS if the printed .ux/inventory.md UI stack names both Electron (the
  shell) and React (the renderer framework) on its Framework / UI layer
  line.
  FAIL if either is missing from that line.
weight: 1
---

Names the shell beside the web framework.
