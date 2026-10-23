---
type: llm
focus: last_message
criteria: |
  The arguments carried `captures: .ux/captures/audit-2026-10-23`.
  PASS if the final report's header (Scope / Captures line) names that
  folder (or "audit-2026-10-23") as the captures used.
  FAIL if the report says "Captures: none" or does not mention the folder.
weight: 1
---

Says in the report which captures the visual review saw.
