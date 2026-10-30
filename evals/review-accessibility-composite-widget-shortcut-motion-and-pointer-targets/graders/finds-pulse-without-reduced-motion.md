---
type: llm
focus: last_message
criteria: |
  fixtures/src/styles.css animates `.live-dot` (fixtures/src/VanPanel.tsx)
  with an infinite `pulse` keyframe and no `prefers-reduced-motion` rule
  anywhere in the stylesheet.
  PASS if a finding targets the live dot's pulse (styles.css `.live-dot`
  or VanPanel.tsx) for the missing reduced-motion path or the loop that
  cannot be paused.
  FAIL otherwise.
weight: 1
---

Reports the decorative pulse with no reduced-motion path.
