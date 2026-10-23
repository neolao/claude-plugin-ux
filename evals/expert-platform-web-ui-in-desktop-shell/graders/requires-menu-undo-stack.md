---
type: llm
focus: last_message
criteria: |
  The app has no application menu and Cmd/Ctrl+Z only works in text
  fields; the rough option offers a custom "Revert changes" button
  instead.
  PASS if a REQUIREMENTS entry demands that rename and reorder be undone
  through the application's Edit > Undo (Cmd/Ctrl+Z) — a menu bar with
  the standard Edit menu, the actions registered on its undo stack — or
  flags the "Revert changes" button as a substitute for it.
  FAIL otherwise.
weight: 1
---

Puts the app's mutations on the host's undo stack and menu bar.
