---
name: review-states-stale-and-offline-follow-product-facts
description: On a single-user online-only product, review-states must report the invoice list without empty state and must not demand conflict detection on the editor's save, an offline state on load or save failure, nor a state the editor already handles
tags: [review-states, recall, precision, product-facts]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-states` sub-agent (Agent tool, `subagent_type: "ux:review-states"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
