---
name: review-content-tone-and-form-conventions
description: With a style.md whose tone is terse and precise, review-content must report the cheering save toast, the Import show item that opens a dialog without an ellipsis and the Delete Cue label capitalized unlike its siblings, and must not report the terse correct strings nor the menu items Electron renders through role:
tags: [review-content, recall, precision, tone, conventions]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-content` sub-agent (Agent tool, `subagent_type: "ux:review-content"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/ and fixtures/locales/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/style.md (no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
