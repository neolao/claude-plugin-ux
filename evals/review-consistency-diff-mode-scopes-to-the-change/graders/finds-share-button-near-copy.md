---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/export/ExportPanel.tsx a `<button
  class="share-btn">` and in ExportPanel.css a `.share-btn` rule with the
  font size, padding, border, radius and colors that `.btn.btn-sm` already
  has in fixtures/src/components/Button.css. The inventory lists Button
  (src/components/Button.tsx) for "every clickable action" with sizes
  md / sm.
  PASS if a finding reports the share button as a local re-implementation
  or near-copy of Button and points at Button (its path, its inventory row
  or its `size="sm"` variant) as the thing to reuse.
  FAIL otherwise.
weight: 1
---

Reports the near-copy the change adds, with the existing component as reference.
