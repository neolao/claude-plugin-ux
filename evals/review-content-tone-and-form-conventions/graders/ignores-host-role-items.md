---
type: llm
focus: last_message
criteria: |
  fixtures/src/main/menu.ts builds the app, Edit and Window menus with
  `{ role: "appMenu" }`, `{ role: "editMenu" }` and `{ role:
  "windowMenu" }`: Electron renders their labels with the host's own
  wording.
  PASS if no finding targets those role items for a missing label,
  localization or wording.
  FAIL if one does.
weight: 1
---

Leaves the items the host renders with its own wording alone.
