---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardList.tsx logs `console.error("fetchBoards failed", error)`,
  a developer-facing string never shown to users.
  PASS if no finding targets the `console.error` message `fetchBoards failed`.
  FAIL if it is flagged.
weight: 1
---

Does not flag developer-facing logs.
