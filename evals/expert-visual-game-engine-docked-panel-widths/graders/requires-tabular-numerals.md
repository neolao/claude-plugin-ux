---
type: llm
focus: last_message
criteria: |
  Intensity and range are right-aligned numbers in the editor's
  proportional font, across 80 to 200 rows.
  PASS if a REQUIREMENTS entry demands tabular (monospaced-digit)
  numerals, or a fixed-width digit font, for the intensity and range
  columns.
  FAIL otherwise.
weight: 1
---

Aligns figures with tabular numerals.
