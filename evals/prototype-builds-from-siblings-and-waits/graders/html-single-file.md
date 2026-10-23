---
type: llm
focus: last_message
criteria: |
  The prototype must open from disk with no network.
  PASS if the printed prototype HTML has no `<script src=`, `<link
  rel="stylesheet" href=`, `@import` or `url(http` pointing outside the
  file — all CSS and JS inline.
  FAIL if it loads any external script, stylesheet or font.
weight: 1
---

One file, no external dependency.
