---
type: llm
focus: last_message
criteria: |
  The inventory's Screens table gives the Library screen's Source as
  src/ui/LibraryView.cpp; the Library exists, it is not a new screen.
  PASS if the printed Library screen spec's frontmatter has
  `source: src/ui/LibraryView.cpp` (alone or among other files).
  FAIL if `source:` is empty, missing, or names another file only.
weight: 1
---

An existing screen's spec carries the inventory's Source so implement and conformance find the code.
