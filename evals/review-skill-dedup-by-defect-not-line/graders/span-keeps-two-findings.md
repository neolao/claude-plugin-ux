---
type: llm
focus: last_message
criteria: |
  src/boards/BoardDetail.tsx line 102 renders
  <span className="link" onClick=…>Open settings</span>: a click handler on
  a non-focusable element with no key handling (review-accessibility), and
  a user-facing string outside t() (review-content). Two different things
  are wrong on one line.
  PASS if the report has at least two distinct numbered findings on that
  line (or on "Open settings"): one about keyboard operability / focus /
  role of the span, one about the hardcoded string.
  FAIL if the two reasons are merged into one finding, or if only one of
  them is reported.
weight: 1
---

Keeps two reasons on one line as two findings.
