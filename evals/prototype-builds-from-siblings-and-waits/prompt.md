---
name: prototype-builds-from-siblings-and-waits
description: /ux:prototype 001 must build a single-file prototype from the sibling values of src/styles.css, inline the spec's copy, give the n/a Partial row no state, record the file path in the flow, recommend /ux:style, then wait for the owner without marking anything validated
tags: [prototype, tokens, states, publish, gate, skill]
runs: 3
max_turns: 60
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Skill]
---

Run the `ux:prototype` skill (Skill tool, `skill: "ux:prototype"`, arguments `001`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). The application cannot be launched here (no `node_modules`, no browser, no network); the Artifact tool and the browser tools are not available, so the prototype can only be published as a file path; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run and the product owner cannot be reached: once the skill has published the prototype and stops to wait for remarks, end the run there. Do not play the product owner, do not invent remarks, do not validate anything yourself.

Once the skill has stopped, repeat its last message verbatim, then print the complete content of `.ux/flows/001-rename-from-board.md`, `.ux/screens/board-detail.md` and `.ux/prototypes/001-rename-from-board.html`.
