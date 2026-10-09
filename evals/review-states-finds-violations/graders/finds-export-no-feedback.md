---
type: llm
focus: last_message
criteria: |
  fixtures/src/ExportButton.tsx awaits `exportBoard`, which resolves only once
  an archive is generated server-side, with no progress indication, no
  disabled button and no error handling.
  PASS if a finding targets ExportButton.tsx for missing feedback, loading
  state or error handling of that async action.
  FAIL otherwise.
weight: 1
---

Reports the export with no feedback.
