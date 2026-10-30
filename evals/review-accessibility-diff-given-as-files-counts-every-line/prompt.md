---
name: review-accessibility-diff-given-as-files-counts-every-line
description: Handed a change as two files with every line counting as added, review-accessibility must report the click-only chip and the unnamed icon button in the listed component, must not report the component the list does not name nor the labeled input, and must not ask for a diff
tags: [review-accessibility, recall, precision, diff-mode, files-outside-git]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-accessibility` sub-agent (Agent tool, `subagent_type: "ux:review-accessibility"`) to review a change in this case directory, handed over as files the way `/ux:review` does outside a git repository. Give it exactly this prompt:

```
mode: diff
files: fixtures/src/TagEditor.tsx, fixtures/src/icons.tsx — the change is given as whole files, outside a git repository: every line of them counts as added
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
