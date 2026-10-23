---
type: llm
focus: last_message
criteria: |
  The arguments were `diff src/boards/BoardDetail.tsx src/i18n.ts` in a
  workspace that is not a git repository.
  PASS if the final report's Scope line says the scope is a diff / a change
  (the two files given as the change), and the report does not say that a
  path is needed or that the review could not run without git.
  FAIL if the report calls the scope a path or an audit, or if the skill
  stopped asking for a path.
weight: 1
---

Treats the listed files as a change, not as paths to audit.
