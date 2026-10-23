---
type: llm
focus: last_message
criteria: |
  The file is chosen through the native OS dialog, whose buttons, title
  and labels are the OS's and are not strings of this application.
  PASS if the reply does not propose or require wording for the native
  file dialog's title, buttons or labels, and does not ask to replace it
  with a custom picker.
  FAIL if a REQUIREMENTS entry prescribes strings inside the native dialog
  or a custom dialog to control its wording.
weight: 1
---

Leaves the OS dialog with the OS's wording.
