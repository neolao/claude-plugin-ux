---
name: review-content-text-nobody-sees-and-the-placement-border
description: review-content must report the accessible name that says the icon, the "Done" announcement and the literal painted on a canvas, and must not report a well-worded message for sitting far from its field nor an image for lacking an alt
tags: [review-content, recall, precision, accessibility-border]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-content` sub-agent (Agent tool, `subagent_type: "ux:review-content"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/ and fixtures/locales/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
