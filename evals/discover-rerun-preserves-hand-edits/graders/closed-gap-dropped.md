---
type: llm
focus: last_message
criteria: |
  The previous inventory recorded, under Known gaps, a hardcoded
  placeholder on the rename input of src/settings/SettingsBoards.tsx; the
  current code has no placeholder attribute on that input at all.
  PASS if the printed .ux/inventory.md Known gaps has no line about a
  hardcoded placeholder in SettingsBoards.tsx.
  FAIL if that line is still there.
weight: 1
---

Drops a carried gap once the code shows it closed.
