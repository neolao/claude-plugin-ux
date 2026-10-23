---
name: review-skill-diff-paths-outside-git
description: Outside a git repository, /ux:review diff with a list of files must review those files as the change instead of asking for a path, report the literal error string in BoardDetail.tsx and nothing in SettingsBoards.tsx, which is not in the list
tags: [review, diff-mode, scope, recall, precision, skill]
runs: 3
max_turns: 60
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:review` skill (Skill tool, `skill: "ux:review"`, arguments `diff src/boards/BoardDetail.tsx src/i18n.ts`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). The workspace is not a git repository: the two files named in the arguments are the change — they were just created or edited to implement the inline rename of flow 001. The application cannot be launched here and there is no test or lint command.

`AskUserQuestion` is not available in this run. If the skill asks anything, take the recommended option.

Once the skill has finished, repeat its final report verbatim.
