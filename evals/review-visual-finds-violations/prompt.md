---
name: review-visual-finds-violations
description: review-visual must report two competing primary actions, a fixed-width panel that clips on narrow viewports and a button without interactive states, without flagging a well-built view
tags: [review-visual, recall, precision]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-visual` sub-agent (Agent tool, `subagent_type: "ux:review-visual"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
