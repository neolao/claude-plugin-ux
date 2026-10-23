---
name: review-content-raw-errors-and-data-text
description: review-content must report the API error shown raw in a toast and propose a UI-owned string, and must not report the mapped offline error, the native open dialog, the contact names and notes the users typed, nor the dependencies' license texts
tags: [review-content, recall, precision, errors, data]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-content` sub-agent (Agent tool, `subagent_type: "ux:review-content"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/ and fixtures/locales/
exclusions: fixtures/data/ (seed data, not UI)
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
