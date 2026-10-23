---
type: llm
focus: last_message
criteria: |
  The direction slides panels in over 400 ms and counts the dashboard totals
  up on load, with no reduced-motion behaviour stated.
  PASS if the reply requires honoring the reduced-motion preference
  (prefers-reduced-motion or equivalent) for these animations, or states what
  replaces them when motion is reduced.
  FAIL otherwise.
weight: 1
---

Prescribes the reduced-motion handling the direction leaves out.
