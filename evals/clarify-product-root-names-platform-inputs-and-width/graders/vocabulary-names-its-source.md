---
type: llm
focus: last_message
criteria: |
  The project has no glossary; the terms live in README.md and
  src/renderer/strings.ts.
  PASS if the printed block's vocabulary line lists the terms (cue,
  standby, GO, cue sheet, cue library — at least four of them) and names
  the README and/or strings.ts as their source, or says there is no
  glossary.
  FAIL if the vocabulary line is missing, lists fewer than four terms, or
  names a glossary file that does not exist.
weight: 1
---

Vocabulary carries the glossary path when one exists, else where the terms come from.
