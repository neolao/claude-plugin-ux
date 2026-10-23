---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/screens/board-detail.md has an empty `source:` line;
  the screen is rendered by src/boards/BoardDetail.tsx.
  PASS if the printed .ux/screens/board-detail.md has a `source:` line
  naming src/boards/BoardDetail.tsx (other files may be listed too).
  FAIL if `source:` is empty, missing, or names only other files.
weight: 1
---

Fills the screen's source with its implementing file.
