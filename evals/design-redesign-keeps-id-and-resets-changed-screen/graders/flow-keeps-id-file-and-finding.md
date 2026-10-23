---
type: llm
focus: last_message
criteria: |
  The fixture's flow is .ux/flows/001-rename-from-board.md with
  `id: 001`, `job: 1 — …` and `finding: F3 (audit 2026-09-14)`.
  PASS if the printed listing of .ux/flows/ holds only
  001-rename-from-board.md and 003-delete-from-settings.md (no new flow
  file), and the printed 001 file still has `id: 001`, its `job:` line
  and `finding: F3 (audit 2026-09-14)`.
  FAIL if a new flow file (004 or another number) was written for the
  redesign, or if `id:`, `job:` or `finding:` changed or disappeared.
weight: 1
---

A redesign updates the flow in place: same id, same file, the audit finding kept.
