---
type: llm
focus: last_message
criteria: |
  src/vendor/reset.css is a vendored third-party stylesheet carrying
  literal colors; it defines no token of the project.
  PASS if no row of the printed .ux/inventory.md Design tokens table names
  src/vendor/reset.css (or src/vendor/) as a Source file. Naming it
  elsewhere (UI stack, Styling approach, Known gaps) is fine.
  FAIL if a Design tokens row cites it as a source.
weight: 1
---

Keeps a vendored stylesheet out of the token sources.
