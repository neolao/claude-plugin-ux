---
type: llm
focus: last_message
criteria: |
  The previous audit is .ux/audit/2026-09-14.md.
  PASS if the final report names the new audit file under .ux/audit/ with a
  date other than 2026-09-14 (the day of the run), and the printed file's
  title carries that date.
  FAIL if the report file named is 2026-09-14.md, or no file is named.
weight: 1
---

Writes a new dated report rather than overwriting the previous one.
