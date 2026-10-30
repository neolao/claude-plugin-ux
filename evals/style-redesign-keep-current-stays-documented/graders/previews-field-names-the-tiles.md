---
type: llm
focus: last_message
criteria: |
  Neither the Artifact tool nor the browser tools were available, so
  the tiles were published as file paths.
  PASS if the printed .ux/style.md frontmatter `previews:` names at
  least one written file under .ux/prototypes/ starting with `style-`.
  FAIL if `previews:` keeps the template placeholder, is empty, or names
  an artifact URL that was never produced.
weight: 1
---

The previews are recorded where the next commands find them.
