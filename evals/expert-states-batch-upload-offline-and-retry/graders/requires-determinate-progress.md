---
type: llm
focus: last_message
criteria: |
  Forty photos of 3 MB upload on a weak network — well beyond ten
  seconds — and nothing says how many are done.
  PASS if a REQUIREMENTS entry demands determinate progress for the
  upload (a count such as "12 of 40", a percentage or a per-photo
  indicator) rather than an indeterminate spinner.
  FAIL otherwise.
weight: 1
---

Requires determinate progress for a long upload.
