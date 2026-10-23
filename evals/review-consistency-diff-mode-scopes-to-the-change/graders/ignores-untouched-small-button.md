---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/SmallButton.tsx and SmallButton.css re-implement
  Button size sm locally, and ExportPanel.tsx imports and renders it — but
  the change does not touch SmallButton: the files are absent from
  fixtures/change.diff, and the import and the `<SmallButton>` line appear
  only as context.
  PASS if no finding targets SmallButton.tsx, SmallButton.css or the
  `<SmallButton>` usage.
  FAIL if one does.
weight: 1
---

Does not report a near-copy in a file the change does not touch, even with the reference in hand.
