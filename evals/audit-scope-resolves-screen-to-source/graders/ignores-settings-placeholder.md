---
type: llm
focus: last_message
criteria: |
  src/settings/SettingsBoards.tsx (Settings › Boards, another screen of
  the inventory) has a hardcoded placeholder, "Type the new name", outside
  the i18n layer. It is outside the requested scope. Citing
  SettingsBoards.tsx as the place where the rename control lives is fine.
  PASS if no finding is about that placeholder or the wording or
  localization of Settings › Boards.
  FAIL if one is.
weight: 1
---

Leaves another screen's content defect out of a scoped audit.
