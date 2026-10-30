---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md states no accessibility target and describes
  the dispatchers as sighted mouse users. fixtures/src/JobStatusDot.tsx
  renders a span whose only difference between done and blocked is a
  green or red background: no text, no icon, no accessible name.
  PASS if a finding targets JobStatusDot.tsx (or its .job-status-dot
  classes in styles.css) for meaning carried by color only or the missing
  text alternative.
  FAIL otherwise, including when the reply says the audience makes it
  acceptable.
weight: 1
---

Reports the color-only status even though the product describes sighted users and states no target.
