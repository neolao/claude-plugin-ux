---
type: llm
focus: last_message
criteria: |
  The project is an Express API with no view, template, stylesheet or
  front-end dependency.
  PASS if the printed .ux/inventory.md UI stack says there is no UI yet
  (none yet, none, no UI layer) on its Framework / UI layer line.
  FAIL if it names a UI framework, or presents Express as the UI layer.
weight: 1
---

Says there is no UI instead of naming one.
