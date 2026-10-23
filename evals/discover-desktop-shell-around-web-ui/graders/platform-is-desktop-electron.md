---
type: llm
focus: last_message
criteria: |
  package.json depends on electron, electron/main.ts creates the
  BrowserWindow and the menu bar, and the React code is only the
  renderer.
  PASS if the printed .ux/product.md Platform line says desktop and names
  Electron (e.g. "desktop (Electron)").
  FAIL if the Platform line says web, or lists web as a surface of its
  own, or does not name Electron.
weight: 1
---

Calls a web UI in a desktop shell what the user runs: desktop.
