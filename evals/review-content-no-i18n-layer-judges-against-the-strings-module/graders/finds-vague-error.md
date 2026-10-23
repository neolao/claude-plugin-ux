---
type: llm
focus: last_message
criteria: |
  fixtures/src/strings.ts has `deleteError: "Something went wrong"`,
  shown by CueList.tsx in a role="alert" when deleting a cue fails: no
  cause, no next step.
  PASS if a finding targets that message (strings.ts or the alert in
  CueList.tsx) as vague / unhelpful.
  FAIL otherwise.
weight: 1
---

Reports the unhelpful error message.
