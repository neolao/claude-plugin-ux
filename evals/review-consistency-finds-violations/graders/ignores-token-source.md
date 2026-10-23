---
type: llm
focus: last_message
criteria: |
  fixtures/src/tokens.css defines the tokens as hex colors and pixel
  values, for both themes; fixtures/src/components/Button.css and
  Dialog.css are the inventory's own components and consume those tokens.
  PASS if no finding targets tokens.css, Button.css, Button.tsx,
  Dialog.css or Dialog.tsx.
  FAIL if a finding reports a literal or a value in one of those files.
weight: 1
---

Does not flag the system's own definitions.
