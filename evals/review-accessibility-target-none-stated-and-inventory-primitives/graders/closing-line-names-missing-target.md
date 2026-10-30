---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md Constraints says `Accessibility target: none
  stated`.
  PASS if the reply ends its count line with a `Not assessed:` note saying
  that no target is stated in product.md and that the review judged
  against WCAG 2.2 AA (or an equivalent wording naming the absent target
  and the assumed level).
  FAIL if the reply names no absent target, or claims product.md states
  one.
weight: 1
---

Names the absent target and the assumed level in the closing line.
