---
name: discover-token-sources-and-evidenced-gaps
description: /ux:discover must write token Sources from tailwind.config.js (never src/vendor/reset.css), a filled Theming row, the 640px breakpoint under Devices & input, no VanRow component row, a file for every Known gap and the glossary path in Vocabulary
tags: [discover, inventory, precision, recall, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:discover` skill (Skill tool, `skill: "ux:discover"`, no arguments) on the project in the current directory: a Vite + React web application, its code under `src/`, its README and `docs/glossary.md` at the root. The application cannot be launched here (no `node_modules`, no browser, no network): the capture step degrades to code only, as the skill provides for. The workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Users: dispatchers, experts, daily, in the control room on two monitors; one dispatcher walks the depot every morning with a tablet (touch).
- Main jobs: see which vans are late or offline at a glance; open a van to know its run and next stop; adjust the minutes before a van counts as late.
- Brand: none beyond the Tailwind config; accessibility target: none stated; languages: English now, French planned; no offline use.
- Vocabulary: the glossary in `docs/glossary.md` is right and complete.

Once the skill has finished, repeat its final report, then print the complete content of `.ux/product.md` and of `.ux/inventory.md`.
