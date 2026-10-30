---
type: llm
focus: last_message
criteria: |
  The change was handed over as two files with the statement that every
  line of them counts as added, with no diff and no `+` lines.
  PASS if the reply contains finding blocks and the closing count line
  (`N state findings across M files.`), and does not ask for a diff,
  for `+` lines, or say the scope is empty / nothing was added.
  FAIL otherwise.
weight: 1
---

Takes the file list as the change instead of asking for a diff.
