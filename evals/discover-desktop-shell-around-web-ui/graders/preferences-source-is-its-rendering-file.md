---
type: llm
focus: last_message
criteria: |
  PASS if the Screens row for Preferences in the printed .ux/inventory.md
  gives src/renderer/screens/Preferences.tsx as its Source.
  FAIL if there is no Preferences row, or its Source is a folder, a
  component name, electron/main.ts alone, or empty.
weight: 1
---

Gives a screen the file that renders it.
