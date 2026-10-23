---
type: llm
focus: last_message
criteria: |
  src/boards/BoardDetail.tsx line 65 calls toast("error", "Rename failed")
  with a literal string; the project's strings go through t() from
  src/i18n.ts and .ux/screens/board-detail.md § Content gives the key
  board.rename.failed with the text "The board could not be renamed.
  Retry.".
  PASS if a numbered finding points at BoardDetail.tsx (line 65 or the
  error toast of the rename) for that literal string — hardcoded outside
  i18n, or different from the spec's text, or both.
  FAIL if no finding mentions it.
weight: 1
---

Reports a defect on a line of a file handed over as the change.
