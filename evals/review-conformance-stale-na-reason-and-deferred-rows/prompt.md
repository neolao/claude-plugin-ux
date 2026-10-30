---
name: review-conformance-stale-na-reason-and-deferred-rows
description: review-conformance must report the n/a Loading row contradicted by the title fetch (spec may need update) and the Esc that keeps the typed name, without flagging the deferred Error row, the reworded accessible name, the conforming rows or the uncovered board header
tags: [review-conformance, recall, precision, n/a-rows, deferred]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-conformance` sub-agent (Agent tool, `subagent_type: "ux:review-conformance"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md), fixtures/.ux/flows/003-rename-board.md, fixtures/.ux/screens/rename-board.md
```

Once the sub-agent returns, report its findings back verbatim.
