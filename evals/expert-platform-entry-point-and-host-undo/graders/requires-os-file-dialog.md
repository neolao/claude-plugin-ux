---
type: llm
focus: last_message
criteria: |
  File > Export uses a custom in-app file browser so it looks the same on
  both OSes.
  PASS if a REQUIREMENTS or RISKS entry says the export must use the OS's
  own file dialog (native QFileDialog, the system save dialog) instead of
  the in-app browser.
  FAIL otherwise.
weight: 1
---

Requires the OS's own dialogs, never a re-implemented one.
