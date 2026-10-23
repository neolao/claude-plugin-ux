---
type: llm
focus: last_message
criteria: |
  fixtures/src/ImportPanel.tsx maps an OfflineError to
  `t("import.error.offline")`, whose text (locales/en.json) says what
  happened and what to do: `You are offline. Connect to the network and
  import the file again.`
  PASS if no finding targets that mapped error (`import.error.offline`,
  its text, or the toast line that shows it).
  FAIL if one does.
weight: 1
---

Does not flag the error already mapped to a UI-owned string with a next step.
