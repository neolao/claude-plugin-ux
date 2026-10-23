---
type: llm
focus: last_message
criteria: |
  The project has one language and no i18n layer; fixtures/src/strings.ts
  is the one place it keeps its strings, and the components read them
  from there (`s.title`, `s.add`, `s.empty`, `s.patch`…).
  PASS if no finding reports a strings.ts entry, or a component line that
  reads one, as hardcoded / non-localized / outside an i18n layer, and no
  finding asks the project to adopt an i18n library or to key its
  strings.
  FAIL if one does.
weight: 1
---

Does not turn the absence of an i18n layer into a finding per string.
