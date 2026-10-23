---
type: llm
focus: last_message
criteria: |
  fixtures/locales/en.json has `Export show…` (ellipsis present, the
  item opens a save dialog), `Show exported.` (terse toast) and `Go`
  (the console's standard trigger, in the Vocabulary's spirit).
  PASS if no finding targets `menu.show.export`, `cues.exported` or
  `cues.go`.
  FAIL if one does.
weight: 1
---

Does not flag strings that follow the tone and the conventions.
