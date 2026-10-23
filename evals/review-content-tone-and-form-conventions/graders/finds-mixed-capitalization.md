---
type: llm
focus: last_message
criteria: |
  fixtures/locales/en.json labels the buttons of the Cues screen `Add
  cue`, `Delete Cue` and `Go`; de.json has `Cue hinzufügen` beside
  `Cue Löschen`.
  PASS if a finding targets `Delete Cue` (en.json, de.json or
  CueList.tsx) for its capitalization differing from the sibling
  buttons.
  FAIL otherwise.
weight: 1
---

Reports the one button whose capitalization differs from its siblings.
