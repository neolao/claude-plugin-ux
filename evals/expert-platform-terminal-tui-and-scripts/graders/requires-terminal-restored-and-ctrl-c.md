---
type: llm
focus: last_message
criteria: |
  The full-screen view stays painted after exit and Ctrl+C is captured
  and ignored.
  PASS if a REQUIREMENTS entry demands that the full-screen view use the
  alternate screen or restore the terminal on exit, and that Ctrl+C leave
  the view (or at least restore the terminal) rather than being ignored
  — both the restore and the Ctrl+C behavior.
  FAIL if either is missing.
weight: 1
---

Restores the terminal and leaves the shell's Ctrl+C alone.
