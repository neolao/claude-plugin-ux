---
type: llm
focus: last_message
criteria: |
  The rough option prints progress lines on stdout followed by the JSON
  summary, so a CI job parsing stdout gets both mixed.
  PASS if a REQUIREMENTS entry demands that progress go to stderr and
  data (the JSON summary) to stdout, or an `--output json` / `--json`
  mode whose stdout carries only the data.
  FAIL otherwise.
weight: 1
---

Keeps data on stdout and progress on stderr.
