---
type: llm
focus: last_message
criteria: |
  When the import fails at step 4 the rough option closes the Wizard and
  restarts at step 1 with a fresh file picker, losing the file and the
  column mapping.
  PASS if a REQUIREMENTS or SCENARIOS entry says that after the failure the
  designer stays at, or returns to, the review or import step (step 3 or 4)
  with the file and the mapping kept — or at least that they never restart
  at step 1 and nothing entered is lost.
  FAIL otherwise.
weight: 1
---

Resumes at the failed step with the input kept, never at step 1.
