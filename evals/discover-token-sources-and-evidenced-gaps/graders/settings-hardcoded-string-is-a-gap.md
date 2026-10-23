---
type: llm
focus: last_message
criteria: |
  src/settings/Settings.tsx renders the literal "Save changes" on its
  Button while every other string of the app goes through t() from
  src/i18n.ts.
  PASS if a Known gaps line of the printed .ux/inventory.md reports a
  hardcoded or untranslated string in Settings.tsx (naming the file).
  FAIL otherwise.
weight: 1
---

Finds a drift gap and anchors it to its file.
