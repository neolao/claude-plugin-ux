---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md declares the term `Workspace` and says never to
  say `Project`. fixtures/locales/en.json has `workspace.delete` =
  `Delete project` (also fr.json: `Supprimer le projet`), while
  `workspace.rename` uses `workspace`.
  PASS if a finding reports `Delete project` (en.json or fr.json) as
  drifting from the vocabulary term Workspace.
  FAIL otherwise.
weight: 1
---

Reports the terminology drift against the product vocabulary.
