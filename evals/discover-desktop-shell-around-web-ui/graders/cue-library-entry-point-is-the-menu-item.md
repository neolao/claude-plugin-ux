---
type: llm
focus: last_message
criteria: |
  The Cue Library screen is only reachable through the Window › Cue
  Library menu item (accelerator CmdOrCtrl+2) declared in
  electron/main.ts, which navigates to the route /library.
  PASS if the Screens row for the cue library in the printed
  .ux/inventory.md gives as Entry point the Window menu item "Cue Library"
  (its accelerator may be added, the route may be added).
  FAIL if its Entry point is the route alone, or names no menu item.
weight: 1
---

Writes the entry point as the user reaches it: a menu item, not a bare route.
