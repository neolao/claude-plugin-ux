---
name: design
description: Design the UX for a need: clarify it, consult the expert agents, propose 2–3 options, write flow and screen specs and the decision to .ux/.
argument-hint: "<need in natural language> | F<n> (finding from the latest audit) | NNN (existing flow to redesign)"
version: 1.1.0
model: claude-sonnet-5-5
---

# /ux:design — Propose a UX adapted to the need

Turn a need into a validated UX design: a flow, its screens with every state, and the reasons behind the choice — written to `.ux/flows/`, `.ux/screens/`, `.ux/decisions/` for `/ux:prototype` and `/ux:implement`.

The value of this command is **adaptation**: the same need gets a different answer for a daily expert on three monitors and for an occasional user on a phone. Every proposal cites the product facts it rests on. This command is about interaction; appearance is `/ux:style`'s.

Reply in the user's language; write specs in the project's documentation language. If the skill stops early with files created under `.ux/`, commit them `wip(ux): …` and say so.

## Step 1 — Context

Read `.ux/product.md` and `.ux/inventory.md` — if either is missing, **invoke `ux:discover`** (Skill tool) first. Also read `.ux/style.md` if present (density, tone, shape every option must respect), `CLAUDE.md`, the project glossary, and every `.ux/flows/*.md`.

## Step 2 — Resolve `$ARGUMENTS`

| `$ARGUMENTS` | Meaning | Action |
|---|---|---|
| `^F\d+$` | Finding in the latest `.ux/audit/*.md` | That finding (evidence, who it hurts, recommendation) is the need |
| `^\d+(-[\w-]+)?$` | Existing flow `.ux/flows/NNN-*.md` | Redesign: the need is the flow's `## Need` plus what the user says is wrong |
| anything else | Free-form need | Use as is |
| empty | — | Ask in one line what to design, stop until answered |

If a reference does not exist, say which file was looked for and stop.

## Step 3 — Frame the need (clarify)

Check overlap with existing flows: if one already covers this job, or already carries the finding (`finding: F<n>` in its frontmatter), say so and ask whether to redesign it (`/ux:design NNN`) instead.

Draft the frame in working notes from what `product.md`, the inventory and the need already establish — **Who** (role, expertise, frequency) · **Job** (quote it; a new job is worth saying) · **Trigger** · **Entry point** (the screen, selection, panel or command the user is in when the need arises — a row of the inventory's Screens table, or the entry to add and the screen that hosts it; leave it open when nothing establishes it) · **Success** · **Constraints** (platform, input, accessibility target, brand, patterns) · **Existing material** (screens and components touched or reusable). `expert-flows` and `expert-platform` shape the flow from the entry point: it is the one line the frame cannot do without.

**Invoke `ux:clarify`** (Skill tool, `skill: "ux:clarify"`) with `kind=need`, `topic="<the need>"`, `context=` that draft. Its `## Shared understanding` block **is** the frame everything below is judged against.

## Step 4 — Consult the experts (in parallel)

Pick the `ux:expert-*` agents whose description matches the need — **4 maximum**; `expert-flows` almost always, `expert-states` whenever data or time is involved. Invoke them **in one message** (Agent tool, `subagent_type: "ux:expert-<name>"`) in *plan consultation* mode with the frame, the relevant `product.md`/`inventory.md` excerpts, and any rough option in mind. Wait for their completion notifications.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them. If launches are genuinely blocked, say so and design alone.

Fold `REQUIREMENTS` into every option, `RISKS` into trade-offs, `SCENARIOS` into acceptance criteria. Each expert also delivers the spec section it owns — keep it for Step 6: `expert-flows` the flow skeleton (entry, steps, the three exit & failure paths), `expert-states` the States rows and the Feedback column, `expert-visual` the Layout section, `expert-content` the copy with its keys, `expert-platform` the host bindings. An expert answering "no concern" in one line closes its axis: nothing to fold, nothing overruled, nothing to report. You remain the designer: when experts conflict, decide and note why in the decision's Consequences.

## Step 5 — Propose 2–3 options

Never a single option. Each, in plain language: **Concept** (one paragraph) · **Flow** (user does → sees) · **Reuses** (from the inventory; what is new) · **Fits because** (product facts, incl. the density and tone of `style.md`) · **Trade-offs** (learning, screen space, dev effort S/M/L, expert risks). Options differ in *interaction model* (inline vs side panel vs page; wizard vs form; modal vs undo), not cosmetics.

This is a mandatory `AskUserQuestion` tool call, not a narrative to describe and resolve yourself — however obvious the recommended option seems, never write out the options in prose and pick one on the user's behalf, and never let confidence in the recommendation substitute for the call. One question, the recommended option first labeled `(Recommended)`, each description carrying its "fits because" and main trade-off. Step 6 starts only once the tool call has actually returned the user's answer. If the user picks "Other" with a variant, integrate it and confirm in one line.

## Step 6 — Write the specs

Numbering: the flow takes the highest `NNN` in `.ux/flows/` + 1, the decision the highest in `.ux/decisions/` + 1 (`/ux:style`'s visual-direction decisions share that sequence), both zero-padded (`001` if none). Slug: kebab-case title; a screen keeps the slug of its existing spec, or takes the kebab-case of its name in the inventory's Screens table.

1. **Flow** — `${CLAUDE_PLUGIN_ROOT}/templates/flow.md` → `.ux/flows/NNN-slug.md`, `status: designed`. Frontmatter the next commands read: `job:` quotes the Jobs to be done entry (number and sentence) or says `new — <job>` when the frame named it new; `screens:` lists every slug written or updated in 2 — `/ux:prototype` builds and `/ux:review` finds the specs through it; `decision:` the NNN of 3; `prototype: none` — `/ux:prototype` fills it. The Flow table and the three Exit & failure paths come from `expert-flows`' skeleton, adapted to the chosen option; the acceptance criteria include every expert's scenarios. Host bindings have no column — they go in the rows' text, where `/ux:implement` wires them and `review-conformance` checks them: the entry's platform form in step 1's *User does* cell (the menu item and its accelerator, the context-menu entry, the route, the gesture, the flag), the host protections the flow relies on (leave prompt, close protection, state kept across backgrounding) in the Exit & failure path they serve.
2. **Screens** — `templates/screen.md` → `.ux/screens/<slug>.md` per screen introduced or changed, `flow: NNN`, `status: designed`; `source:` is the inventory's Source for an existing screen — `/ux:implement` and `review-conformance` locate the code through it — and stays empty for a new one, which `/ux:implement` fills. **Layout** from `expert-visual`'s regions (reading order, primary action, the component or variant each region reuses, what wraps, stacks, truncates or scrolls at the narrowest width or when docked). **Every States row filled** from `expert-states`' rows ("n/a: <reason>" when a state truly cannot occur), and the Feedback column of every Interactions row; the host mechanism a mutation registers with (`on the host undo stack`, `marks the document dirty`) in that Interactions row's *Result* cell. **Content** holds the actual copy — `expert-content`'s strings in the product vocabulary, keyed in the project's key format, the text in the i18n layer's source language even when the spec is in another. A section whose expert was not consulted is written by you from the template's own guidance. Existing spec (redesign): update in place.
3. **Decision** — `templates/decision.md` → `.ux/decisions/NNN-slug.md`: rejected options and the product facts behind the choice. Append-only: on a redesign, create a new one and set the old one to `status: superseded by NNN`.

Redesign: update the existing flow file in place — it keeps its `id`, file name, `job` and `finding`; `status: designed`, `screens:` updated, `decision:` the new NNN, `prototype: none` (the old prototype shows the old design; `/ux:prototype` rebuilds it). A screen the redesign changes is reset to `status: designed` with `flow: NNN` and its `source:` kept; a screen it leaves as it is keeps its status — `/ux:implement` builds the `designed` ones and leaves an `implemented` one alone. Audit finding: add `finding: F<n> (audit YYYY-MM-DD)` to the flow frontmatter — `/ux:audit` keeps that finding's row and stops suggesting it.

## Step 7 — Commit

If the project is a git repository: stage `.ux/flows/`, `.ux/screens/`, `.ux/decisions/`; commit `docs(ux): design NNN <title>`.

## Step 8 — Report

Short and plain: the chosen option in two sentences and the two product facts that decided it; files written; decisions settled during clarification (count) and any expert requirement overruled, with the reason. Next: `/ux:prototype NNN` or `/ux:implement NNN` — preceded by `/ux:style` if the project has neither tokens nor `.ux/style.md`.
