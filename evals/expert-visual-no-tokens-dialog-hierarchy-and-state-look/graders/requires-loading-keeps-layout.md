---
type: llm
focus: last_message
criteria: |
  While the request runs, the dialog's body is replaced by a centered
  spinner and the dialog shrinks around it.
  PASS if a REQUIREMENTS entry demands that the dialog keep its size and
  content while the request runs (the button in a loading state, the
  fields kept, no shrink or shift), or flags the shrinking dialog.
  FAIL if the dialog may still be replaced by a spinner and shrink, or
  the point is not mentioned.
weight: 1
---

Keeps the layout while loading.
