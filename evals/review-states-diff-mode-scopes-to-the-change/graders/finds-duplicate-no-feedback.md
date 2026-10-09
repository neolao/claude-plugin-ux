---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/ProjectPage.tsx a Duplicate button whose
  onClick calls `duplicateProject(id)` without awaiting, catching or
  acknowledging it: no feedback, no error handling, no in-progress state.
  PASS if a finding targets that Duplicate action for missing feedback,
  loading state or error handling.
  FAIL otherwise.
weight: 1
---

Reports the duplicate action added without any state handling.
