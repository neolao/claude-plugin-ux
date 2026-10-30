---
type: llm
focus: last_message
criteria: |
  The template's `## Migration` section is for a redesign that changes
  the tokens; /ux:implement runs it as its first sub-task. The owner
  kept the current system, so there is nothing to migrate.
  PASS if the printed .ux/style.md has no `## Migration` section, or
  only a heading stating that nothing migrates (no table row with a
  From / To value).
  FAIL if a `## Migration` table has at least one row with a From / To
  value, or the section keeps the template's placeholder row.
weight: 1
---

No migration is planned when nothing changes.
