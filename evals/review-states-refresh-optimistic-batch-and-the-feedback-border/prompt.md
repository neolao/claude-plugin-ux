---
name: review-states-refresh-optimistic-batch-and-the-feedback-border
description: review-states must report the refresh that blanks its list, the optimistic toggle never rolled back and the bulk archive with one generic result, and must write no block for the handled activity feed nor flag its auto-dismissing toast
tags: [review-states, recall, precision, accessibility-border]
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
