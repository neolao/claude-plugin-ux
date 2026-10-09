---
name: review-states-diff-mode-scopes-to-the-change
description: In diff mode review-states must report the unhandled duplicate action and the member list without empty case, and must not flag the correct archive action nor the pre-existing project load
tags: [review-states, recall, precision, diff-mode]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-states` sub-agent (Agent tool, `subagent_type: "ux:review-states"`) to review the change described by `fixtures/change.diff` in this case directory. Give it exactly this prompt:

```
mode: diff
diff: fixtures/change.diff (files are the post-change versions under fixtures/)
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
