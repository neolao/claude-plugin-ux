---
type: llm
focus: last_message
criteria: |
  `.export-actions { margin: 18px 0; }` in fixtures/src/export/ExportPanel.css
  is off the spacing scale, but that line is neither added nor modified by
  the change — it appears only as context at the top of the hunk.
  PASS if no finding reports that margin or the `.export-actions` rule.
  FAIL if one does.
weight: 1
---

Does not report a pre-existing literal on an unchanged line.
