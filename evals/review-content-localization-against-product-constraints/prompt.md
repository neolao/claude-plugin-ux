---
name: review-content-localization-against-product-constraints
description: On an English + Arabic product with i18next, review-content must report the btnOk key, the "on the right" helper with its arrow and the zero case handled by a literal outside the plural message, and must not report the correct interpolated toast nor the stylesheet's physical left margins
tags: [review-content, recall, precision, localization, rtl]
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
