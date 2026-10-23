---
type: llm
focus: last_message
criteria: |
  fixtures/src/FilterPanel.tsx sits in .side-panel (fixed 520px width and
  640px height, overflow hidden) with nowrap rows, so the controls are
  clipped when the panel is docked narrower or the labels are long.
  PASS if a finding targets FilterPanel.tsx or the .side-panel rules in
  styles.css for the fixed size, the overflow clipping or the missing
  wrapping.
  FAIL otherwise.
weight: 1
---

Reports the fixed-width clipping panel.
