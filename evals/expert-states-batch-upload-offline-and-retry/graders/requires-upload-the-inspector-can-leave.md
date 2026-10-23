---
type: llm
focus: last_message
criteria: |
  The ModalSpinner blocks the whole app until the last photo is sent.
  PASS if a REQUIREMENTS entry says the upload must not block the app —
  the inspector can leave the Report screen or keep working while it
  runs, and something tells them when it finished (the sent status on
  the Reports tab, a notification, a toast) — or flags the blocking
  modal as a defect for a multi-minute upload.
  FAIL if the blocking modal is kept or not mentioned.
weight: 1
---

Lets the user leave a long operation and learn when it finished.
