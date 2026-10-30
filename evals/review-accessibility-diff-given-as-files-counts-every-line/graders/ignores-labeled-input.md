---
type: llm
focus: last_message
criteria: |
  fixtures/src/TagEditor.tsx has a <label htmlFor="new-tag"> bound to the
  `new-tag` input.
  PASS if no finding claims that this input lacks a label or an accessible
  name.
  FAIL if a finding does.
weight: 1
---

Does not flag the correctly labeled input.
