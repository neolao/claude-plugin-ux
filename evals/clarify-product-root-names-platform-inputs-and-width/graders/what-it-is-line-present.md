---
type: llm
focus: last_message
criteria: |
  README.md says Cuecard is the desktop application a theatre's stage
  manager uses to write and run the cue sheet of a show.
  PASS if the printed `## Shared understanding` block has a line stating
  what Cuecard is (writing and running a show's cue sheet, for a stage
  manager) — a "What it is", "Purpose" or equivalent line, not only a
  jobs or users line.
  FAIL if no line of the block says what the application is.
weight: 1
---

Settles the What it is section discover fills first.
