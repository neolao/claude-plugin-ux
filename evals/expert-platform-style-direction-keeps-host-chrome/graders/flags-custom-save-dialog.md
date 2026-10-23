---
type: llm
focus: last_message
criteria: |
  The direction replaces EditorUtility.SaveFilePanel with a custom
  in-panel "Save rig" dialog.
  PASS if a REQUIREMENTS or RISKS entry says the export must keep the
  editor's or the OS's own file panel, or flags the custom dialog as a
  platform defect.
  FAIL otherwise.
weight: 1
---

Keeps the host's own dialogs.
