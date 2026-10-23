---
type: llm
focus: last_message
criteria: |
  The project's glossary is docs/glossary.md (Van, Run, Dispatcher, Late).
  PASS if the printed .ux/product.md Vocabulary section names
  docs/glossary.md as the source of its terms.
  FAIL if the path is absent from the Vocabulary section.
weight: 1
---

Tells the content agents where the glossary is.
