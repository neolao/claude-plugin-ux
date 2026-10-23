---
type: llm
focus: last_message
criteria: |
  fixtures/locales/en.json is one of the two files handed over as the
  change; it has `cues.delete.error` = `Error`, shown in a role="alert"
  by CueList.tsx when deleting a cue fails: no cause, no next step.
  PASS if a finding targets that message (`cues.delete.error` / `Error`,
  in en.json or CueList.tsx) as vague / unhelpful.
  FAIL otherwise.
weight: 1
---

Reports the vague error in a listed strings file.
