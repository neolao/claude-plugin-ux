---
type: llm
focus: last_message
criteria: |
  Where a Unity editor tool shows progress — EditorUtility's progress
  bar, the Progress API, the status bar — is expert-platform's domain.
  PASS if no REQUIREMENTS entry prescribes the host's progress surface or
  API for the catalog load. Requiring that a loading or progress state
  exist, and when it appears, is fine.
  FAIL if a REQUIREMENTS entry prescribes EditorUtility.DisplayProgressBar,
  the Progress API, the status bar or another host surface.
weight: 1
---

Leaves where the host shows progress to expert-platform.
