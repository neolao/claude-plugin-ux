---
type: llm
focus: last_message
criteria: |
  The printed audit file follows templates/audit.md: a header with Scope,
  Captures and Agents run; a Summary with the counts by priority; a Findings
  table whose rows are numbered F1, F2… with a Priority, an Axis, a Where a
  developer can open and a Recommendation; and Suggested next designs as
  `/ux:design F<n>` lines.
  PASS if the printed file has all four parts and every finding row carries
  an F number, a priority and a Where.
  FAIL if a part is missing or a finding row lacks one of those.
weight: 1
---

Writes the report in the template's shape.
