---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/style.md Palette gives color.text-muted (#8a8a8a) a ratio of
  3.5:1 on color.surface, for text at 18 px and above and icons only.
  fixtures/src/styles.css `.shift-note-help` applies var(--color-text-muted)
  to 13 px helper text (fixtures/src/ShiftNote.tsx), below 4.5:1.
  PASS if a finding reports the insufficient contrast of that helper text
  (styles.css `.shift-note-help` or ShiftNote.tsx).
  FAIL otherwise.
weight: 1
---

Reports the muted token used on small text as a contrast failure.
