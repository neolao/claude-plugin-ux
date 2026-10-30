---
type: llm
focus: last_message
criteria: |
  The tokens live in src/renderer/styles/tokens.css and stay the
  reference when the current system is kept.
  PASS if the printed .ux/style.md `## Source of truth` section says
  the tokens exist in the project and names src/renderer/styles/tokens.css
  (the template's `existing — <token source files>` form).
  FAIL if it says style.md is the source of truth until tokens are
  created, keeps the template's bracketed alternatives, or names no
  file.
weight: 1
---

The token file stays the source of truth.
