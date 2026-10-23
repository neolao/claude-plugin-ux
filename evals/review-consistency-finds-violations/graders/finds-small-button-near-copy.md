---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/SmallButton.tsx renders its own `<button
  class="small-btn">`, and SmallButton.css gives it the font size,
  padding, border, radius and colors that `.btn.btn-sm` already has in
  fixtures/src/components/Button.css. The inventory lists Button
  (src/components/Button.tsx) for "every clickable action" with sizes
  md / sm.
  PASS if a finding reports SmallButton as a local re-implementation or
  near-copy of Button and points at Button (its path, its inventory row
  or its `size="sm"` variant) as the thing to reuse.
  FAIL otherwise.
weight: 1
---

Reports the local near-copy of a component the inventory lists in the variant it needs.
