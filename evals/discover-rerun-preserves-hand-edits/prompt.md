---
name: discover-rerun-preserves-hand-edits
description: A re-run of /ux:discover on a project with an existing .ux/ must keep the Vocabulary section marked keep verbatim, carry over the audit's open gap, drop the gap the code has closed, and keep the screen name "Board detail" that the flow and the audit reference
tags: [discover, rerun, precision, recall, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:discover` skill (Skill tool, `skill: "ux:discover"`, no arguments) on the project in the current directory: a React web application under `src/`, with an existing `.ux/` folder (`product.md`, `inventory.md`, one flow, one audit report) written by an earlier run. The application cannot be launched here (no `node_modules`, no browser, no network): the capture step degrades to code only, as the skill provides for. The workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Everything `.ux/product.md` says about users, jobs, platform and constraints still holds; nothing has changed on the product side.
- Vocabulary: keep it exactly as it is.

Once the skill has finished, repeat its final report, then print the complete content of `.ux/product.md` and of `.ux/inventory.md`.
