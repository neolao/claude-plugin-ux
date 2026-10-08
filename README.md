# claude-plugin-ui-ux

A Claude Code plugin for **designing and implementing the UI/UX of an application**. It first understands the application — who uses it, for what, on which platform, with which existing components — then proposes a UX adapted to each need, prototypes it, implements it in the codebase, and reviews the result.

Works on any stack: web (React, Vue, Svelte…), desktop (Electron, Tauri, native), mobile, game-engine tools (Unity, Godot, Unreal), terminal UIs. Everything it learns and decides is written into a `.ux/` folder in *your* project, committed alongside the code.

**Website:** [neolao.github.io/claude-plugin-ux](https://neolao.github.io/claude-plugin-ux/) — animated terminal demos of the workflow.

## What it does

- **Never assumes silently.** `/ux:clarify` interviews you in rounds over a design tree — every question whose prerequisites are settled, numbered, each with a recommended answer grounded in the product facts; facts are looked up in the code and `.ux/`, only decisions come to you. It runs on its own ("grill me on this") and automatically at the framing step of `/ux:discover`, `/ux:design`, `/ux:style` and `/ux:implement`.
- **Understands before designing.** `/ux:discover` detects the UI stack, inventories screens, components and design tokens, captures the running app, and interviews you about users, jobs and constraints. The result (`.ux/product.md`, `.ux/inventory.md`) grounds every later decision.
- **Proposes a UX adapted to the need, not a generic one.** `/ux:design` frames the need against the product context, consults specialized expert agents in parallel, and presents 2–3 options that differ in interaction model — each justified by product facts (who, how often, which platform) — before writing the flow, its screens with **every state**, and a decision record.
- **Decides the look and feel once.** `/ux:style` documents the intent of an existing design system, or — when there is none — proposes 2–3 visual directions (palette, typography, density, shape, motion), each previewed as a style tile and justified by the users and platform; the chosen one becomes `.ux/style.md`, which prototypes and implementation draw their tokens from.
- **Validates cheaply.** `/ux:prototype` builds a single-file clickable HTML prototype from the spec, styled with the project's own tokens, every state reachable, published for review.
- **Implements with the project's own building blocks.** `/ux:implement` maps the spec to existing components (reuse → extend → create), builds state by state, localized and accessible, then verifies it in the running app and runs the review.
- **Reviews the user-facing result.** `/ux:review` runs six read-only review agents in parallel and returns a numbered findings list; `/ux:audit` applies the same agents plus a heuristic evaluation to the existing UI and produces a prioritized report.

## Installation

From within Claude Code:

```
/plugin marketplace add neolao/claude-plugin-ux
/plugin install ux
```

Or, for local development, point the marketplace at the checkout:

```
/plugin marketplace add /path/to/claude-plugin-ux
/plugin install ux
```

Verify with `/plugin list` — `ux` should appear enabled and the `/ux:*` commands become available. After editing the plugin, run `/reload-plugins`.

## Commands

| Command | Purpose |
|---|---|
| `/ux:discover [description]` | Understand the application: stack, tokens, screens, components, captures, user interview → `.ux/product.md`, `.ux/inventory.md` |
| `/ux:clarify <topic>` | Grill the user in rounds about a need, a product, a visual direction or a plan until nothing is silently assumed — standalone, or run automatically by discover / design / style / implement |
| `/ux:style [--redesign] [hints]` | Define the look and feel once per product: document the existing design system's intent, or propose 2–3 visual directions with style-tile previews → `.ux/style.md` |
| `/ux:audit [path\|screen]` | Heuristic audit of the existing UI with the review agents → prioritized `.ux/audit/YYYY-MM-DD.md` |
| `/ux:design <need> \| F<n> \| NNN` | Propose 2–3 adapted UX options, write the chosen flow + screen specs + decision |
| `/ux:prototype NNN \| <slug>` | Build and publish a clickable HTML prototype; iterate; mark the flow `validated` |
| `/ux:implement NNN \| <slug>` | Implement the spec in the codebase, verify in the running app, review, mark `implemented` |
| `/ux:review [path\|diff] [--fix]` | UI/UX review of a change or path; `--fix` applies High/Medium fixes |

## Typical flow

1. `/ux:discover` once per project (re-run when the product or UI changes a lot)
2. `/ux:style` if the project has no design system — or `/ux:style --redesign` to evolve the existing one; the look and feel is decided once, then reused everywhere
3. `/ux:audit` to see where the existing UI hurts users most
4. `/ux:design "Let operators duplicate a fixture with its children"` — or `/ux:design F2` to fix an audit finding
5. `/ux:prototype 001` to validate with the product owner before any code
6. `/ux:implement 001` to build it — creates the tokens from `style.md` if the project has none, then the review runs automatically at the end
7. `/ux:review` on any UI change made outside this workflow

Steps 1, 2, 4 and 6 open with a `/ux:clarify` session: the command looks up what the code and `.ux/` already say, then grills you only on what remains open, round by round, before anything is written.

## The `.ux/` folder

Created in your project by `/ux:discover`; meant to be committed.

```
.ux/
├── product.md          # who, what, platform, constraints, vocabulary
├── inventory.md        # the UI as it is: stack, tokens, screens, components, patterns, gaps
├── style.md            # look and feel: intent, palette, typography, density, shape, motion
├── flows/NNN-slug.md   # one flow per need — status: designed → validated → implemented
├── screens/<slug>.md   # one spec per screen, all five states covered
├── decisions/NNN.md    # UX decisions with rejected options (append-only)
├── prototypes/*.html   # single-file clickable prototypes
├── captures/           # screenshots of the real app (baseline, audits, after implementation)
└── audit/YYYY-MM-DD.md # prioritized findings
```

`/ux:discover` also appends a short `## UX context` section to the project's `CLAUDE.md` (marked `<!-- ux:context -->`) so every session reads `.ux/` before touching the UI.

## Agents

Two families with disjoint roles, one agent per axis:

| Axis | Expert (prescribes *before*, consulted by `/ux:design` and `/ux:implement`) | Reviewer (critiques *after*, run by `/ux:review` and `/ux:audit`) |
|---|---|---|
| Flows & navigation | `expert-flows` | — (covered by the audit's heuristic pass) |
| Interface states & feedback | `expert-states` | `review-states` |
| Accessibility | `expert-accessibility` | `review-accessibility` |
| Content & localization | `expert-content` | `review-content` |
| Visual design | `expert-visual` | `review-visual` |
| Platform conventions | `expert-platform` | — |
| Design-system reuse | — | `review-consistency` |
| Spec conformance | — | `review-conformance` |

Experts answer in a fixed shape (`REQUIREMENTS` / `RISKS` / `SCENARIOS`) so their output folds directly into specs and acceptance criteria. Reviewers are read-only and report only findings with a `file:line` or a capture as evidence.

## Maintenance

Skills and agents are scored with `claude plugin eval` (cases in `evals/`, scores in `evals/results/history.md`). The scheduled routine `scheduled-tasks/improve-skills-and-agents/SKILL.md` improves one target per run.

## Requirements

[Claude Code](https://claude.com/claude-code) with plugin support. Capturing the running application is best effort: it uses the `run` skill or browser tools when available and degrades to a code-only inventory otherwise.

## Credits

Structure inspired by [neolao/claude-plugin-vibe](https://github.com/neolao/claude-plugin-vibe) (skills as step-by-step workflows, consulting experts vs. review agents). `/ux:clarify` adapts [mattpocock/skills — grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md) (design tree, rounds, frontier, recommended answers) with UX seeding and `.ux/` grounding.

## License

[MIT](LICENSE)
