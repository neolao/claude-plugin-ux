---
type: llm
focus: last_message
criteria: |
  fixtures/src/CueList.tsx is one of the two files handed over as the
  change; its line 9 renders the literal `Loading cues…` outside the
  `t()` layer.
  PASS if a finding targets that `Loading cues…` line (CueList.tsx) as a
  hardcoded / non-localized string.
  FAIL otherwise.
weight: 1
---

Reports the literal in a listed file when the change is handed over as files.
