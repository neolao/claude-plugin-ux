---
name: review-accessibility-composite-widget-shortcut-motion-and-pointer-targets
description: On a pointer-only desktop tool review-accessibility must report the toolbar whose every button is a tab stop, the bare "f" shortcut and the pulse with no reduced-motion path, and must not flag the loading spinner's rotation nor the 28 px buttons as too small
tags: [review-accessibility, recall, precision, keyboard, motion, targets]
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
