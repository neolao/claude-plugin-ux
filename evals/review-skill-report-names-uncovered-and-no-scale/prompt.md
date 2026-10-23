---
name: review-skill-report-names-uncovered-and-no-scale
description: /ux:review must carry the agents' closing lines into its report — the screens no spec covers and the absence of a scale under Not assessed — without turning either into a numbered finding
tags: [review, report, closing-lines, recall, precision, skill]
runs: 3
max_turns: 60
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:review` skill (Skill tool, `skill: "ux:review"`, arguments `src`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). The application cannot be launched here and there is no test or lint command; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. If the skill asks anything, take the recommended option.

Once the skill has finished, repeat its final report verbatim.
