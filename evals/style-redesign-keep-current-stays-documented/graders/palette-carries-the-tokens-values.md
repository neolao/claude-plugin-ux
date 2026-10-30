---
type: llm
focus: last_message
criteria: |
  tokens.css defines accent #c2410c, go #15803d, standby #b45309, bg
  #ffffff (dark #18181b), text #18181b (dark #fafafa).
  PASS if the printed .ux/style.md Palette table carries #c2410c as the
  primary, #15803d and #b45309 among its rows (semantic or dedicated
  go / standby rows), and introduces no other hue for the primary.
  FAIL if the primary is another color, if #15803d or #b45309 is
  missing, or if the table keeps empty cells or invented values.
weight: 1
---

Every value in the file is the one the existing system has.
