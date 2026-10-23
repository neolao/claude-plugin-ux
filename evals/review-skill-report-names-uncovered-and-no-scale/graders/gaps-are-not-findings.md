---
type: llm
focus: last_message
criteria: |
  A screen without a spec and the absence of design tokens are gaps for
  /ux:design and /ux:style, not defects of the code.
  PASS if no numbered finding (1…n under High / Medium / Low) has as its
  issue that a screen or file has no spec, or that the project has no
  tokens or no scale.
  FAIL if such a finding is numbered and prioritized.
weight: 1
---

Keeps the closing lines out of the findings list.
