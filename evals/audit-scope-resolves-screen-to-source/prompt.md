---
name: audit-scope-resolves-screen-to-source
description: Given the screen name "Board detail", /ux:audit must scope to src/boards/BoardDetail.tsx from the inventory, pass that path to ux:review, report the rename job missing from that screen, and leave the empty Boards list and the Settings placeholder out of the report
tags: [audit, scope, recall, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:audit` skill (Skill tool, `skill: "ux:audit"`, arguments `Board detail`) on the project in the current directory: `.ux/product.md` and `.ux/inventory.md` are at its root, the UI code is under `src/`. The application cannot be launched here (no dev command, no browser, no network): the capture step degrades to code only, as the skill provides for.

Once the skill has finished, repeat its final report, then print the complete content of the audit file it wrote under `.ux/audit/`.
