---
type: llm
focus: last_message
criteria: |
  The direction shows late shipments and errors in the primary teal,
  bolder — the same color as the primary action.
  PASS if a REQUIREMENTS entry demands semantic roles (error, warning,
  success, info — at least error) distinct from the primary color in the
  palette's structure.
  FAIL if errors may still share the primary teal, or the point is not
  mentioned.
weight: 1
---

Separates the semantic roles from the primary.
