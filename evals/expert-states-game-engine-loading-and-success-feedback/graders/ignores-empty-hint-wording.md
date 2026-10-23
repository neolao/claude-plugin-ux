---
type: llm
focus: last_message
criteria: |
  The wording of the empty-state hint is expert-content's domain.
  PASS if no REQUIREMENTS entry writes the text of the empty-state hint
  (or of the error message). Saying what the hint must convey — that no
  prop matches, which action fills the grid — is fine; a quoted string
  proposed as the hint is not.
  FAIL if a REQUIREMENTS entry proposes the hint's or the error's
  wording.
weight: 1
---

Leaves the empty-state wording to expert-content.
