---
type: llm
focus: last_message
criteria: |
  fixtures/src/ActivityFeed.tsx confirms a refresh with
  `showToast("Activity updated")`, a transient message with no persistent
  log or announcement in the component.
  PASS if no finding targets that toast (or the toasts in BulkArchive.tsx)
  for being transient, auto-dismissing, not persisted somewhere readable,
  not logged, or not announced to assistive technology.
  FAIL if one does.
weight: 1
---

Leaves whether a passing message stays readable to review-accessibility.
