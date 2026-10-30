---
type: llm
focus: last_message
criteria: |
  The Esc, double-click and Enter behavior is in BoardTitle.tsx; no
  BoardHeader.tsx exists in the fixture and no spec covers anything outside
  the rename screen (src/Dialog.tsx and src/toast.ts have none).
  PASS if no finding block has Dialog.tsx or toast.ts as its code location
  (naming them in the closing line as not covered is fine).
  FAIL if a finding block targets them.
weight: 1
---

Does not turn files without a spec into conformance findings.
