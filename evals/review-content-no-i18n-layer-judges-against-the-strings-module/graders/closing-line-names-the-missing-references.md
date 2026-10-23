---
type: llm
focus: last_message
criteria: |
  The project has no Vocabulary section in product.md and no i18n layer.
  PASS if the reply ends with the count line (`N content findings across
  M files.`) followed by a `Not assessed:` line that names at least one
  of the two absences (no vocabulary / no i18n layer), and no finding
  block has that absence as its ISSUE.
  FAIL if there is no such line, or the absence is reported as a finding.
weight: 1
---

Names the missing references in the closing line for the report's Not assessed section.
