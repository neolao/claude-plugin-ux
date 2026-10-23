---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/style.md Tone of content says terse and precise, no
  exclamation marks, no cheer. fixtures/locales/en.json `cues.saved` is
  `Awesome! Your show is saved!!`, shown as a toast after saving.
  PASS if a finding targets that string (en.json, de.json or the toast
  line in CueList.tsx) for departing from the tone (cheer, exclamation
  marks), with a terse suggestion.
  FAIL otherwise.
weight: 1
---

Reports the string that departs from style.md's tone of content.
