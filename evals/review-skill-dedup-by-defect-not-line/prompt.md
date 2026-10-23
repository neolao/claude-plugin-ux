---
name: review-skill-dedup-by-defect-not-line
description: /ux:review must merge the unhandled fetch error reported by states and by conformance into one finding, and keep the keyboard and the hardcoded-string findings on the clickable span as two
tags: [review, deduplication, precision, recall, skill]
runs: 3
max_turns: 60
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:review` skill (Skill tool, `skill: "ux:review"`, arguments `src/boards/BoardDetail.tsx`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). The application cannot be launched here and there is no test or lint command; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. If the skill asks anything, take the recommended option.

Once the skill has finished, repeat its final report verbatim.
