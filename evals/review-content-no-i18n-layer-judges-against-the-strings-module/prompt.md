---
name: review-content-no-i18n-layer-judges-against-the-strings-module
description: On a single-language project whose strings live in a strings module, review-content must report the string written inline outside it, the vague error and the two names for one concept, must not report the module's literals as hardcoded nor demand an i18n library, and must name the missing vocabulary and layer in its closing line
tags: [review-content, recall, precision, no-i18n]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-content` sub-agent (Agent tool, `subagent_type: "ux:review-content"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/screens/*.md)
```

Once the sub-agent returns, report its findings back verbatim.
