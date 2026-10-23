---
type: llm
focus: last_message
criteria: |
  The inventory says every change to the patch is undone with Edit >
  Undo. Registering the edit with the host undo stack, its accelerator
  and its menu home are expert-platform's domain.
  PASS if no REQUIREMENTS entry prescribes registering the address edit
  with Edit > Undo, the Cmd/Ctrl+Z accelerator, or a menu or context-menu
  entry for the edit. Naming undo as the way to take back a saved
  address, or as expert-platform's concern, is fine.
  FAIL if a REQUIREMENTS entry prescribes one of those.
weight: 1
---

Does not prescribe the host undo stack or the menus.
