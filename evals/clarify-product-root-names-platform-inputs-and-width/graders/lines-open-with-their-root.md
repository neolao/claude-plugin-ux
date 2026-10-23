---
type: llm
focus: last_message
criteria: |
  The product roots are: what it is, users, jobs to be done, platform &
  surface, constraints, vocabulary — the sections of product.md that
  /ux:discover fills from the block.
  PASS if every settled line of the printed `## Shared understanding`
  block ("- <title>: <answer> (…)") opens with one of those roots (or an
  unmistakable form of it: "Users — expertise", "Platform", "Constraints
  — localization", "Jobs"), so each line can be placed in its product.md
  section without guessing.
  FAIL if a settled line opens with a title that names none of the roots
  (e.g. "Dark mode", "Laptop", "Network"), or the lines are not grouped
  by root.
weight: 1
---

Each line names the section it fills, so the caller does not guess the mapping.
