---
type: llm
focus: last_message
criteria: |
  The owner said the action lives on the board itself, next to "Archive
  board"; the inventory's Screens table lists Board detail at
  /boards/:id, rendered by src/boards/BoardDetail.tsx.
  PASS if the printed `## Shared understanding` block has an entry point
  line (titled entry point, entry, where it starts, or equivalent) naming
  the Board detail screen — by name, by its route /boards/:id or by
  src/boards/BoardDetail.tsx — as where the need arises.
  FAIL if the block has no entry point line, or it names the Boards list,
  Settings › Boards or a new page.
weight: 1
---

Settles where the flow starts, the line expert-flows and expert-platform read.
