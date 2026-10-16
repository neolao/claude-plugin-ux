---
name: review-accessibility-finds-violations
description: review-accessibility must report a click-only div, unnamed icon buttons, a color-only status, a dialog without focus management and low-contrast text, without flagging a correctly labeled form
tags: [review-accessibility, recall, precision]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-accessibility` sub-agent (Agent tool, `subagent_type: "ux:review-accessibility"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
