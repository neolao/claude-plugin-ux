---
type: llm
focus: last_message
criteria: |
  The rough option closes the window immediately on Cmd/Ctrl+W or the
  close button and loses what was not saved.
  PASS if a REQUIREMENTS or SCENARIOS entry demands unsaved-changes
  protection on close or quit (a prompt, or nothing lost because the
  change is saved first).
  FAIL otherwise.
weight: 1
---

Requires the desktop's unsaved-changes protection on close.
