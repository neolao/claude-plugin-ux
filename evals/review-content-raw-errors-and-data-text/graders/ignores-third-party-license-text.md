---
type: llm
focus: last_message
criteria: |
  fixtures/src/AboutPanel.tsx renders each dependency's `license` text
  from fixtures/src/licenses.json, one of them in capitals (`THE
  SOFTWARE IS PROVIDED "AS IS"…`).
  PASS if no finding targets the license texts, licenses.json, or the
  `<dd>{lib.license}</dd>` line, for capitalization, wording, length or
  localization.
  FAIL if one does.
weight: 1
---

Does not reword third-party content shown as it is.
