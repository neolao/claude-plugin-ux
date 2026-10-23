---
name: clarify-no-argument-asks-the-topic
description: With no argument, /ux:clarify must ask in one line what to clarify and stop — no tree derived from .ux/, no lookup, no shared understanding block
tags: [clarify, no-argument, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 900
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:clarify` skill (Skill tool, `skill: "ux:clarify"`, no arguments) on the project in the current directory: a React web application under `src/` with a `.ux/` folder (`product.md`, `inventory.md`, `flows/001-rename-from-board.md`, `audit/2026-09-14.md`). There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run and nobody is there to answer: whenever the skill would ask the user, write the question as plain text and end the run there.

Once the skill has finished, repeat its final message exactly.
