---
type: llm
focus: last_message
criteria: |
  fixtures/src/ImportPanel.tsx opens the OS file dialog through
  `window.rolodex.showOpenDialog({ properties: ["openFile"], filters:
  [{ name: t("import.dialog.filter"), extensions: ["csv"] }] })`: the
  dialog's title, buttons and labels are the OS's own.
  PASS if no finding targets that call for a missing or improvable
  title, button label or message of the dialog.
  FAIL if one does.
weight: 1
---

Leaves the OS's own dialog its own wording.
