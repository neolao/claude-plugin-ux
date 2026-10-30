---
name: review-accessibility-target-none-stated-and-inventory-primitives
description: With no stated target and sighted users, review-accessibility must still report the color-only status and the muted token on 13 px text, fix the unannounced results with the inventory's announce helper, write no block for the dialog built on the inventory's Dialog, and name the absent target in its closing line
tags: [review-accessibility, recall, precision, product-facts, inventory-primitives]
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
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/style.md (no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
