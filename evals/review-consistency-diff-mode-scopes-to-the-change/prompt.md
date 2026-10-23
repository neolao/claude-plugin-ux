---
name: review-consistency-diff-mode-scopes-to-the-change
description: In diff mode review-consistency must report the gap off the spacing scale, the local share button that re-implements Button size sm and the inline success text where the project uses a toast, and must not flag the added lines that use tokens, the pre-existing off-scale margin on an unchanged line nor the untouched SmallButton
tags: [review-consistency, recall, precision, diff-mode]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-consistency` sub-agent (Agent tool, `subagent_type: "ux:review-consistency"`) to review the change described by `fixtures/change.diff` in this case directory. Give it exactly this prompt:

```
mode: diff
diff: fixtures/change.diff (files are the post-change versions under fixtures/)
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/style.md (no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
