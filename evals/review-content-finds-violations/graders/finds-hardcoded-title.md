---
type: llm
focus: last_message
criteria: |
  fixtures/src/WorkspaceSettings.tsx renders the title `Workspace settings`
  as a literal inside <h1>, outside the `t()` layer, while every other
  string of the file goes through `t()`.
  PASS if a finding targets that title (WorkspaceSettings.tsx) as a
  hardcoded / non-localized string.
  FAIL otherwise.
weight: 1
---

Reports the screen title that bypasses the i18n layer.
