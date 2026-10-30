---
type: llm
focus: last_message
criteria: |
  fixtures/src/InvoiceEditor.tsx handles loading ("Loading invoice…"),
  load error (an alert with a way back), saving (button disabled and
  relabelled), save error (inline alert keeping the user's changes) and
  success (a toast, since the saved result is not otherwise visible).
  PASS if no finding claims that one of those states is missing or
  unhandled in InvoiceEditor.tsx.
  FAIL if a finding does.
weight: 1
---

Does not report a state the editor already handles.
