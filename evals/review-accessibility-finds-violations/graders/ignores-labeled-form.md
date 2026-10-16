---
type: llm
focus: last_message
criteria: |
  fixtures/src/RenameForm.tsx has a <label htmlFor> bound to its input and
  a native submit button.
  PASS if no finding claims that RenameForm.tsx lacks a label, a name, a role
  or keyboard operability.
  FAIL if a finding reports one of those as missing in RenameForm.tsx.
weight: 1
---

Does not flag the correctly labeled form.
