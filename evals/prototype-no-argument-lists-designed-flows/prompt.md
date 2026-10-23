---
name: prototype-no-argument-lists-designed-flows
description: /ux:prototype with no argument must list the flows still designed, ask which one and stop — no discover session, no file written, the validated and implemented flows not offered
tags: [prototype, arguments, precision, skill]
runs: 3
max_turns: 30
timeout_seconds: 600
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:prototype` skill (Skill tool, `skill: "ux:prototype"`, no arguments) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, three flows under `.ux/flows/`, their screens under `.ux/screens/`). The application cannot be launched here (no `node_modules`, no browser, no network); the workspace is not a git repository.

`AskUserQuestion` is not available in this run and the product owner cannot be reached: whenever the skill stops to ask the user something, end the run there. Do not pick a flow yourself.

Once the skill has stopped, repeat its last message verbatim, then list every file you wrote or edited during the run (or say "none").
