---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/inventory.md's i18n line says the UI strings live in
  src/strings.ts. fixtures/src/CueList.tsx line 11 renders the literal
  `Loading cues…` inline, the only user-visible string of the two
  components not taken from src/strings.ts.
  PASS if a finding targets that `Loading cues…` line (CueList.tsx) for
  being written outside the strings module.
  FAIL otherwise.
weight: 1
---

Reports the one string written outside the place the project keeps its strings.
