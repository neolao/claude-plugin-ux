---
type: llm
focus: last_message
criteria: |
  The tokens live in src/renderer/styles/tokens.css; /ux:implement runs
  the `## Migration` table in its stated order as its first sub-task.
  PASS if the printed .ux/style.md has a `## Migration` table with at
  least one row whose Files cell names src/renderer/styles/tokens.css
  and whose From and To cells carry values (a token name or a color,
  size or duration), the placeholder row gone.
  FAIL if the section is missing, deleted, keeps the template's empty
  row only, or no row names tokens.css.
weight: 1
---

A redesign that changes the tokens plans their migration where /ux:implement reads it.
