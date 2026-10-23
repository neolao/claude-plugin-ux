---
type: llm
focus: last_message
criteria: |
  fixtures/src/ImportPanel.tsx shows an import failure with
  `toast(err.message)` for an ApiError, whose message is the API's own
  text (`422 Unprocessable Entity: row 14: email is not valid` in
  api.ts): a backend message shown as it comes.
  PASS if a finding targets that `toast(err.message)` line
  (ImportPanel.tsx) as a raw / unmapped error message, and its
  SUGGESTION proposes a UI-owned string or i18n key for that cause.
  FAIL otherwise.
weight: 1
---

Reports the backend error shown raw and asks for a UI-owned string per cause.
