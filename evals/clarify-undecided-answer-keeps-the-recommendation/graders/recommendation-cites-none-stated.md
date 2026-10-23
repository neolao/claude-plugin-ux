---
type: llm
focus: last_message
criteria: |
  product.md Constraints says "Accessibility target: none stated".
  PASS if the printed block attributes the accessibility recommendation
  to that fact — the accessibility line or the Facts looked up line
  names product.md's "none stated" (or the Constraints section) as what
  the recommendation rests on.
  FAIL if no line of the block names product.md or its Constraints for
  the accessibility target.
weight: 1
---

The fact behind a recommendation is cited, so the caller can revisit it.
