---
type: llm
focus: last_message
criteria: |
  The change adds an Archive action whose handler has loading
  (`archiving` + disabled), error (catch + toast) and success (toast)
  handling.
  PASS if no finding claims that the Archive action lacks loading, error or
  success handling.
  FAIL if a finding does.
weight: 1
---

Does not flag the archive action that handles its states.
