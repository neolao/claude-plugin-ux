---
name: review-consistency-finds-violations
description: review-consistency must report padding off the spacing scale, a surface color written as a literal, the muted-text token used as a border, a local near-copy of the small Button and a confirm dialog where the project undoes from a toast, without flagging the new keyboard-hint component, values computed from tokens, the empty state the inventory lists as a known gap, the token file, or the hover, contrast and wording gaps other reviewers own
tags: [review-consistency, recall, precision]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-consistency` sub-agent (Agent tool, `subagent_type: "ux:review-consistency"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/style.md (no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
