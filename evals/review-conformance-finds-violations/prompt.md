---
name: review-conformance-finds-violations
description: review-conformance must report a missing Error state, a Send label that differs from the Content table, a Cancel that drops the draft the flow keeps, and a CSV import the flow excludes, without flagging the n/a rows, the toast confirmation the spec leaves open, the close button's missing name or the Members panel no spec covers
tags: [review-conformance, recall, precision]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-conformance` sub-agent (Agent tool, `subagent_type: "ux:review-conformance"`) to review `fixtures/` in this case directory. Give it exactly this prompt:

```
mode: audit
scope: fixtures/src/
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md), fixtures/.ux/flows/001-invite-member.md, fixtures/.ux/screens/invite-member.md
```

Once the sub-agent returns, report its findings back verbatim.
