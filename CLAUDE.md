# CLAUDE.md — claude-plugin-ui-ux

## Project overview

A **Claude Code plugin** (`ux`): Markdown skills and agents plus JSON manifests. There is no runtime, no application code, no test suite — the content is consumed by Claude Code itself when installed in *other* projects.

**Type:** Claude Code plugin (meta-tooling). **Stack:** Markdown + JSON only. Do not add a language manifest, tests or linter without an explicit request.

## Architecture

```
claude-plugin-ui-ux/
├── .claude-plugin/
│   ├── plugin.json        # plugin manifest (name "ux", version, description)
│   └── marketplace.json   # single-plugin marketplace pointing at ./
├── skills/<name>/SKILL.md # slash commands /ux:<name> — clarify, discover, style, audit, design, prototype, implement, review
├── agents/expert-*.md     # consulting experts (prescribe before design/implementation)
├── agents/review-*.md     # read-only reviewers (critique after)
├── templates/*.md         # canonical shapes of the .ux/ files written into target projects (incl. ux-readme.md)
└── README.md              # user-facing documentation and command table
```

Skills reference templates through `${CLAUDE_PLUGIN_ROOT}/templates/<file>.md`; agents are invoked as `subagent_type: "ux:<agent-name>"`; skills call each other with `skill: "ux:<name>"`.

## Conventions

- **Language:** every file is in English. Skills instruct Claude to *reply* in the user's language and to *write* `.ux/` files in the target project's documentation language.
- **Frontmatter:** skills need `name`, `description`, `argument-hint`; agents need `name`, `description`. **Descriptions ≤ 25 words** — they load into every session where the plugin is installed. Follow the closest existing file for tone and length.
- **Shared blocks marked `_Identical across … — update together._`** (expert Modes, reviewer Input contract) must stay byte-identical across the family.
- **Agents own disjoint axes.** Before adding a check to one agent, make sure no other agent already covers it; each agent's "What NOT to do" / "Out of scope" names the neighbours. Border criteria and their single owner (expert and reviewer alike):

  | Criterion | Owner |
  |---|---|
  | color-only meaning, contrast, reduced-motion, keyboard operability & shortcuts, target sizes | accessibility |
  | literal values off the token/type/spacing scale | consistency |
  | hover/focus/active/disabled styling, density fit, line length, alignment | visual |
  | existence of empty/loading/partial/error/success handling, async feedback | states |
  | wording of any string (incl. empty-state message) | content |
  | strings and behavior matching the `.ux/` spec | conformance |
  | step economy, entry points, generic reversibility (undo over confirm) | flows |
  | host-platform conventions (menus, host undo stack, gestures, CLI flags) | platform |
- **Skills are step-by-step workflows** with explicit gates (approval before code, 3 self-correction attempts), and every skill that writes to `.ux/` ends with a commit step scoped to those files.
- **Framing questions go through `ux:clarify`**, never through ad-hoc `AskUserQuestion` gates — `discover`, `design`, `style` and `implement` invoke it at their framing step and consume its `## Shared understanding` block. `AskUserQuestion` is reserved for choosing among prepared options (design Step 5, style Step 7). `clarify` itself writes nothing and commits nothing.
- **Sub-agent invocations inside skills are part of the command the user ran** — every skill that launches agents carries the byte-identical sentence «These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them.»; some sessions carry such a rule.
- **Skills delegate rather than duplicate:** `audit` invokes `review` for the agent pass, `design`/`style`/`prototype`/`implement` invoke `discover` when `.ux/` is missing, `implement` invokes `review`. Agent lists and template sections are not restated in skills — the agent descriptions and the templates are the reference.
- **Templates are the contract** between skills: a field added to a template must be produced by the writing skill and consumed by the reading ones (`design` → `prototype` → `implement` → `review-conformance`; `style` → `prototype` → `implement` → `review-consistency`/`review-visual`). The `## Shared understanding` block is `clarify`'s output contract — its shape is defined once in `skills/clarify/SKILL.md` and consumed by the four calling skills.

## Definition of done for a change here

- [ ] Frontmatter complete and consistent with sibling files
- [ ] JSON manifests still valid (`jq . .claude-plugin/*.json`)
- [ ] README command table and agent table match `skills/` and `agents/`
- [ ] No placeholder or draft text left behind
- [ ] Re-read the diff yourself before presenting it — nothing else verifies it

## Local testing

Add the checkout as a marketplace inside a target project (`/plugin marketplace add <path>`, `/plugin install ux`), run `/ux:discover` there, and `/reload-plugins` after each edit.
