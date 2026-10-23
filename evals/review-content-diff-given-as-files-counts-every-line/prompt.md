---
name: review-content-diff-given-as-files-counts-every-line
description: Handed a change as two files with every line counting as added, review-content must report the literal in the listed component and the vague error in the listed strings file, must not report the component the list does not name, and must not ask for a diff
tags: [review-content, recall, precision, diff-mode, files-outside-git]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-content` sub-agent (Agent tool, `subagent_type: "ux:review-content"`) to review a change in this case directory, handed over as files the way `/ux:review` does outside a git repository. Give it exactly this prompt:

```
mode: diff
files: fixtures/src/CueList.tsx, fixtures/locales/en.json — the change is given as whole files, outside a git repository: every line of them counts as added
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
