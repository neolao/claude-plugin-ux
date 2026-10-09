---
name: review-states-finds-violations
description: review-states must report a list without empty state, an unguarded and uncaught submission, and a long async action without feedback, without flagging a view that handles every state
tags: [review-states, recall, precision]
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
