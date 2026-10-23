---
name: audit-rerun-tracks-previous-findings
description: On a re-run /ux:audit must report the previous audit's fixed finding as gone, keep the persisting rename finding with its flow named in the Recommendation and not as a next design, still report the archived dead end, and write a new dated file
tags: [audit, rerun, recall, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:audit` skill (Skill tool, `skill: "ux:audit"`, arguments `src`) on the project in the current directory: `.ux/product.md`, `.ux/inventory.md`, a previous audit under `.ux/audit/` and one flow under `.ux/flows/` are at its root, the UI code is under `src/`. The application cannot be launched here (no dev command, no browser, no network): the capture step degrades to code only, as the skill provides for.

Once the skill has finished, repeat its final report, then print the complete content of the audit file it wrote under `.ux/audit/`.
