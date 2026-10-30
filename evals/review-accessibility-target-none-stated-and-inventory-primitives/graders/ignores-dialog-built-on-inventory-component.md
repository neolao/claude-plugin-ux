---
type: llm
focus: last_message
criteria: |
  fixtures/src/CloseJobDialog.tsx is built on the inventory's Dialog
  (fixtures/src/Dialog.tsx), which moves focus to its first control on
  open, traps Tab, closes on Escape and restores focus on unmount.
  PASS if the reply contains no finding block whose FILE is
  CloseJobDialog.tsx or Dialog.tsx — neither one reporting focus
  management, a trap or a restore as missing, nor one whose ISSUE says the
  dialog is handled, fine or not flagged.
  FAIL if any block names CloseJobDialog.tsx or Dialog.tsx.
weight: 1
---

Writes no block, not even a "handled" note, for the view built on the inventory's Dialog.
