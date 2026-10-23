---
type: llm
focus: last_message
criteria: |
  The existing .ux/product.md has the heading `## Vocabulary <!-- keep -->`
  and, under it, a hand-written Operator entry ending with: never call
  them "admin" in the UI, the team rejected that word in the 2026-09
  review.
  PASS if the printed .ux/product.md still has that heading with its
  marker and the Operator entry with that sentence unchanged.
  FAIL if the marker, the entry or the sentence is missing or reworded.
weight: 1
---

Preserves a section marked keep verbatim on refresh.
