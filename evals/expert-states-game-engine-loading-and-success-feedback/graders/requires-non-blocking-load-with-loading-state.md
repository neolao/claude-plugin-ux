---
type: llm
focus: last_message
criteria: |
  The catalog is fetched on the main thread and the editor does not
  respond for 5 to 10 s; product.md says the editor must stay usable.
  PASS if a REQUIREMENTS entry demands that the catalog load keep the
  editor responsive (asynchronous, off the main thread) and that the
  panel show a loading state meanwhile — or flags the frozen editor as a
  missing loading state.
  FAIL if the synchronous load is kept or not mentioned.
weight: 1
---

Treats a frozen editor as a missing loading state.
