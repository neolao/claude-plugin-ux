---
type: llm
focus: last_message
criteria: |
  src/settings/SettingsBoards.tsx line 70 renders error?.message — the raw
  exception text — in its error state. That file is not in the list of
  files given as the change.
  PASS if no numbered finding points at src/settings/SettingsBoards.tsx.
  FAIL if any finding cites SettingsBoards.tsx.
weight: 1
---

Keeps the review to the files given as the change.
