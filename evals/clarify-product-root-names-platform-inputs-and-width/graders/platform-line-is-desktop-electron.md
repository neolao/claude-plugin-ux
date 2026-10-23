---
type: llm
focus: last_message
criteria: |
  package.json depends on electron and electron/main.ts creates the
  BrowserWindow and the menu bar; the React code is only the renderer.
  PASS if the printed `## Shared understanding` block has a platform
  line that says desktop and names Electron (e.g. "desktop (Electron)").
  FAIL if the platform line says web, lists web as a surface of its own,
  or does not name Electron.
weight: 1
---

Calls a web UI in a desktop shell what the user runs: desktop.
