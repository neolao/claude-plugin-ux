---
type: llm
focus: last_message
criteria: |
  SmallButton.css has no hover or focus-visible rule (review-visual's);
  KeyboardHint.css shows 12 px text in `--color-text-muted`, whose
  contrast is review-accessibility's; ExportHistory.tsx renders the
  hardcoded string "No exports yet" (review-content's).
  PASS if no finding has as its ISSUE a missing or indistinguishable
  hover/focus/active/disabled style, a contrast ratio, or the wording or
  hardcoding of a string. A near-copy finding that mentions in passing
  the states the copy lacks is fine.
  FAIL if a finding's ISSUE is one of those.
weight: 1
---

Leaves hover styling, contrast and wording to the reviewers that own them.
