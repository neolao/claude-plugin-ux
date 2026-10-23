---
type: llm
focus: last_message
criteria: |
  Which URL or route the inbox gets, whether it is deep-linkable, and how
  browser Back behaves are platform conventions, expert-platform's domain.
  PASS if no REQUIREMENTS entry prescribes a URL or route pattern (such as
  "/expenses/inbox"), a deep-link format, or browser Back/refresh behaviour.
  Naming the screen the flow starts on is fine.
  FAIL if a REQUIREMENTS entry prescribes one of those.
weight: 1
---

Does not prescribe the URL shape or browser navigation mechanics.
