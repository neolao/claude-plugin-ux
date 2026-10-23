---
type: llm
focus: last_message
criteria: |
  The product owner's answers in the prompt say nothing about the
  platform; the Electron shell is in package.json and electron/main.ts.
  PASS if the printed block attributes the platform to the code — the
  Facts looked up line (or the platform line itself) names package.json,
  electron/main.ts or the Electron shell as where the platform was found.
  FAIL if the platform is presented as the owner's choice, as an open
  question, or with no source at all.
weight: 1
---

A fact the code settles is looked up and cited, never asked.
