---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/ExportPanel.tsx guards `clearHistory` with
  `window.confirm(...)`. The inventory's Interaction patterns in use say a
  destructive action runs at once and its toast offers Undo — no
  confirmation dialog — and Toast (src/toast.ts) takes an undo callback.
  PASS if a finding reports the confirmation dialog as diverging from the
  project's undo-from-toast pattern.
  FAIL otherwise.
weight: 1
---

Reports the ad-hoc pattern where the inventory records a different one.
