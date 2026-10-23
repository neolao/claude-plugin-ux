---
type: llm
focus: last_message
criteria: |
  The inventory's Design tokens table has `none` for every family and there
  is no .ux/style.md: review-consistency judges against the sibling values
  only and closes by naming the absence of a scale.
  PASS if the final report, outside its numbered findings, says that the
  project has no design tokens / no scale (a mention of /ux:style is
  welcome but not required).
  FAIL if the report does not mention the absence of tokens or a scale.
weight: 1
---

Carries review-consistency's closing line into the report.
