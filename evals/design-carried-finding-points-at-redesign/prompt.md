---
name: design-carried-finding-points-at-redesign
description: On an audit finding a flow already carries, /ux:design must name that flow and propose its redesign instead of designing a second flow, and stop when the owner declines — nothing written, no expert consulted
tags: [design, finding, redesign, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 900
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:design` skill (Skill tool, `skill: "ux:design"`, arguments `F3`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, one flow under `.ux/flows/`, a previous audit under `.ux/audit/`). There is no browser and no network here; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, and pick the recommended option for anything they do not cover:

- Asked whether to redesign an existing flow instead: not now — stop here and tell me which command to run later.

Once the skill has stopped, repeat its last message verbatim, then print the list of files under `.ux/flows/`, `.ux/screens/` and `.ux/decisions/` (say "none" for a folder that does not exist).
