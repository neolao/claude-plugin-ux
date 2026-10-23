---
name: implement-no-argument-lists-pending-flows
description: /ux:implement with no argument must list the flows not yet implemented with their status, ask which one and stop — no clarify session, no file written, the implemented flow not offered
tags: [implement, arguments, precision, skill]
runs: 3
max_turns: 30
timeout_seconds: 600
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:implement` skill (Skill tool, `skill: "ux:implement"`, no arguments) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, three flows under `.ux/flows/`, their screens under `.ux/screens/`). The application cannot be launched here (no `node_modules`, no browser, no network); the workspace is not a git repository.

`AskUserQuestion` is not available in this run and the product owner cannot be reached: whenever the skill stops to ask the user something, end the run there. Do not pick a flow yourself.

Once the skill has stopped, repeat its last message verbatim, then list every file you wrote or edited during the run (or say "none").
