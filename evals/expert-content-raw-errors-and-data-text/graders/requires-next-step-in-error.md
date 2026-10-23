---
type: llm
focus: last_message
criteria: |
  The two failure causes have different next steps: an invalid row can be
  fixed in the sheet (and the row is known), an unreadable file needs
  another file or permission.
  PASS if the reply proposes or requires an error string that says what
  happened and what to do now for at least one of the two causes (for
  example naming the row and asking to fix its email, or asking to choose
  a file the app can read).
  FAIL if every proposed error string stops at "something went wrong" or
  has no next step.
weight: 1
---

Error copy says what to do now.
