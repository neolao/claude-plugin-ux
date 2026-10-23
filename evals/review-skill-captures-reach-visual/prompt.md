---
name: review-skill-captures-reach-visual
description: /ux:review invoked with a captures folder must pass it to review-visual, name it in the report and keep the captures out of the files in scope
tags: [review, captures, handoff, recall, precision, skill]
runs: 3
max_turns: 60
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:review` skill (Skill tool, `skill: "ux:review"`, arguments `src/boards exclusions: none captures: .ux/captures/audit-2026-10-23`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`, captures under `.ux/captures/audit-2026-10-23/`). The application cannot be launched here and there is no test or lint command; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. If the skill asks anything, take the recommended option.

Once the skill has finished, repeat its final report verbatim.
