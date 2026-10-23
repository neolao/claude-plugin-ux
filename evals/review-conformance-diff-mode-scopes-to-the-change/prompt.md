---
name: review-conformance-diff-mode-scopes-to-the-change
description: In diff mode review-conformance must report the error branch that clears the address, the Send label changed away from the spec and the undocumented copy checkbox, and must not flag the correct error message and retry, the pre-existing title divergence on unchanged lines nor the untouched board header
tags: [review-conformance, recall, precision, diff-mode]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:review-conformance` sub-agent (Agent tool, `subagent_type: "ux:review-conformance"`) to review the change described by `fixtures/change.diff` in this case directory. Give it exactly this prompt:

```
mode: diff
diff: fixtures/change.diff (files are the post-change versions under fixtures/)
exclusions: none
specs: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md), fixtures/.ux/flows/001-invite-member.md, fixtures/.ux/flows/002-rename-board.md, fixtures/.ux/screens/invite-member.md, fixtures/.ux/screens/board-header.md
```

Once the sub-agent returns, report its findings back verbatim.
