---
type: llm
focus: last_message
criteria: |
  fixtures/src/TagEditor.tsx is one of the two files handed over as the
  change; each tag is toggled from a `div.chip` with an onClick handler:
  not focusable, no key handling, no role.
  PASS if a finding targets that chip (TagEditor.tsx) for keyboard
  operability (not focusable, no key handler, or no button role).
  FAIL otherwise.
weight: 1
---

Reports the click-only chip in a listed file when the change is handed over as files.
