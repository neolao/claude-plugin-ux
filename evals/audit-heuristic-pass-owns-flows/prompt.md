---
name: audit-heuristic-pass-owns-flows
description: /ux:audit must report the rename job reachable only through Settings and the archived page that leads nowhere, carry the empty Boards list once as review-states' finding, leave the consequence-naming delete confirmation alone, and write the report in the template's shape
tags: [audit, recall, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:audit` skill (Skill tool, `skill: "ux:audit"`, arguments `src`) on the project in the current directory: `.ux/product.md` and `.ux/inventory.md` are at its root, the UI code is under `src/`. The application cannot be launched here (no dev command, no browser, no network): the capture step degrades to code only, as the skill provides for.

Once the skill has finished, repeat its final report, then print the complete content of the audit file it wrote under `.ux/audit/`.
