---
type: llm
focus: last_message
criteria: |
  Routes are declared with HashRouter in src/renderer/App.tsx, and the
  renderer has no navigation bar: every route is reached through the
  "navigate" channel sent by the menu bar in electron/main.ts.
  PASS if the printed .ux/inventory.md Routing / navigation line names
  both src/renderer/App.tsx (or the HashRouter there) and electron/main.ts
  (or the application menu there).
  FAIL if it names a library only, or only one of the two files.
weight: 1
---

Points Routing at where routes and menus are declared.
