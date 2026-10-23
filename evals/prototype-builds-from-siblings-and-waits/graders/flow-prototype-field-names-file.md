---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/flows/001-rename-from-board.md has `prototype: none`;
  neither the Artifact tool nor browser tools were available, so the
  prototype was published as a file path.
  PASS if the printed flow file's `prototype:` line names the written
  file (.ux/prototypes/001-rename-from-board.html or the path the skill
  chose under .ux/prototypes/).
  FAIL if `prototype:` is still `none`, missing, or names a URL that was
  never produced.
weight: 1
---

Records the prototype's path in the flow even without an artifact URL.
