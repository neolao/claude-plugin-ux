---
type: llm
focus: last_message
criteria: |
  fixtures/src/ActivityFeed.tsx handles loading, load error with retry,
  empty, a refresh that keeps the current events on screen marked as
  updating, refresh failure (a persistent inline alert) and success.
  PASS if the reply contains no finding block whose FILE is ActivityFeed.tsx
  — neither one reporting a state as missing there, nor one whose ISSUE says
  the view is handled, fine, not flagged or handed off to another agent.
  FAIL if any block names ActivityFeed.tsx.
weight: 1
---

Writes no block, not even a "handled" note, for the view that handles every state.
