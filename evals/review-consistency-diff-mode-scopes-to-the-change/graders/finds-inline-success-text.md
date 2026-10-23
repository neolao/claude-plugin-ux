---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/export/ExportPanel.tsx an inline
  `<span class="share-copied">` shown after the link is copied. The
  inventory's Interaction patterns in use say success is shown as a toast
  (`showToast` from src/toast.ts), which the same file already uses for the
  export and clear actions.
  PASS if a finding reports the inline "Link copied" text as diverging
  from the project's toast pattern for success.
  FAIL otherwise.
weight: 1
---

Reports the ad-hoc feedback pattern the change introduces.
