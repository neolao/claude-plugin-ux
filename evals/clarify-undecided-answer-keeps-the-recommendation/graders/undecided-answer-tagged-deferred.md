---
type: llm
focus: last_message
criteria: |
  The owner answered "I don't know — you decide" to the accessibility
  target.
  PASS if the printed block's accessibility line carries a concrete
  target or rule (a WCAG level, "keep the existing focus styles and
  contrast", or equivalent) and is tagged as recommended with the user
  deferring (the tag contains "deferred", "undecided" or "you decide"
  beside "recommended").
  FAIL if the accessibility line is missing, tagged plainly as the
  user's choice, or tagged recommended with no sign that the user
  deferred.
weight: 1
---

An "I don't know" settles on the recommendation and says the user deferred.
