---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardHeader.tsx is not in the file list handed over as the
  change; its Rename button calls `renameBoard` without awaiting, catching
  or acknowledging it.
  PASS if no finding targets BoardHeader.tsx or the Rename action.
  FAIL if one does.
weight: 1
---

Does not flag a file the change does not list.
