---
name: review-accessibility-diff-mode-scopes-to-the-change
description: In diff mode review-accessibility must report the click-only chip and the placeholder-only input, and must not flag the correctly named sort button nor the pre-existing close button
tags: [review-accessibility, recall, precision, diff-mode]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-accessibility` sub-agent (Agent tool, `subagent_type: "ux:review-accessibility"`) to review the change described by `fixtures/change.diff` in this case directory. Give it exactly this prompt:

```
mode: diff
diff: fixtures/change.diff (files are the post-change versions under fixtures/)
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
