---
type: llm
focus: last_message
criteria: |
  fixtures/src/TagEditor.tsx is one of the two files handed over as the
  change; its add button's only content is `<PlusIcon />`, an SVG with no
  title, and the button has no aria-label or text.
  PASS if a finding targets that button (TagEditor.tsx) for its missing
  accessible name.
  FAIL otherwise.
weight: 1
---

Reports the icon-only button without a name in a listed file.
