---
type: llm
focus: last_message
criteria: |
  fixtures/src/ActivityChart.tsx paints `ctx.fillText("No activity yet",
  4, 12)` on a canvas when there are no values: a user-visible literal
  baked into a canvas, outside the i18n layer.
  PASS if a finding targets that line (ActivityChart.tsx) as text baked
  into a canvas and/or a literal outside the i18n layer.
  FAIL otherwise.
weight: 1
---

Reports the literal painted on the canvas.
