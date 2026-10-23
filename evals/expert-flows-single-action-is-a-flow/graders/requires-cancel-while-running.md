---
type: llm
focus: last_message
criteria: |
  The export takes 10–20 s and cannot be stopped once started; the shared
  understanding says an export that takes too long can be stopped.
  PASS if a REQUIREMENTS entry demands that a running export can be
  cancelled or stopped.
  FAIL otherwise.
weight: 1
---

Requires a way to stop the running export.
