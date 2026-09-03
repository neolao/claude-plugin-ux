---
name: design
description: Design the UX for a need: clarify it, consult the expert agents, propose 2–3 options, write flow and screen specs and the decision to .ux/.
argument-hint: "<need in natural language> | F<n> (finding from the latest audit) | NNN (existing flow to redesign)"
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

Check overlap with existing flows: if one already covers this job, say so and ask whether to redesign it (`/ux:design NNN`) instead.

Draft the frame in working notes from what `product.md`, the inventory and the need already establish — **Who** (role, expertise, frequency) · **Job** (quote it; a new job is worth saying) · **Trigger** · **Success** · **Constraints** (platform, input, accessibility target, brand, patterns) · **Existing material** (screens and components touched or reusable).

**Invoke `ux:clarify`** (Skill tool, `skill: "ux:clarify"`) with `kind=need`, `topic="<the need>"`, `context=` that draft. Its `## Shared understanding` block **is** the frame everything below is judged against.

## Step 4 — Consult the experts (in parallel)

Pick the `ux:expert-*` agents whose description matches the need — **4 maximum**; `expert-flows` almost always, `expert-states` whenever data or time is involved. Invoke them **in one message** (Agent tool, `subagent_type: "ux:expert-<name>"`) in *plan consultation* mode with the frame, the relevant `product.md`/`inventory.md` excerpts, and any rough option in mind. Wait for their completion notifications.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them. If launches are genuinely blocked, say so and design alone.

Fold `REQUIREMENTS` into every option, `RISKS` into trade-offs, `SCENARIOS` into acceptance criteria. You remain the designer: when experts conflict, decide and note why.

## Step 5 — Propose 2–3 options

Never a single option. Each, in plain language: **Concept** (one paragraph) · **Flow** (user does → sees) · **Reuses** (from the inventory; what is new) · **Fits because** (product facts, incl. the density and tone of `style.md`) · **Trade-offs** (learning, screen space, dev effort S/M/L, expert risks). Options differ in *interaction model* (inline vs side panel vs page; wizard vs form; modal vs undo), not cosmetics.

Present them with `AskUserQuestion`: one question, the recommended option first labeled `(Recommended)`, each description carrying its "fits because" and main trade-off. If the user picks "Other" with a variant, integrate it and confirm in one line.

## Step 6 — Write the specs

Numbering: highest `NNN` in `.ux/flows/` + 1, zero-padded (`001` if none). Slug: kebab-case title.

1. **Flow** — `${CLAUDE_PLUGIN_ROOT}/templates/flow.md` → `.ux/flows/NNN-slug.md`, `status: designed`; exit/failure paths and acceptance criteria include the experts' scenarios.
2. **Screens** — `templates/screen.md` → `.ux/screens/<slug>.md` per screen introduced or changed. **Every States row filled** ("n/a: <reason>" when a state truly cannot occur). Content table holds the actual copy in the product vocabulary. Existing spec (redesign): update in place.
3. **Decision** — `templates/decision.md` → `.ux/decisions/NNN-slug.md`: rejected options and the product facts behind the choice. Append-only: on a redesign, create a new one and set the old one to `status: superseded by NNN`.

Redesign: update the existing flow file, reset `status: designed`, update `decision:`. Audit finding: add `finding: F<n> (audit YYYY-MM-DD)` to the flow frontmatter.

## Step 7 — Commit

If the project is a git repository: stage `.ux/flows/`, `.ux/screens/`, `.ux/decisions/`; commit `docs(ux): design NNN <title>`.

## Step 8 — Report

Short and plain: the chosen option in two sentences and the two product facts that decided it; files written; decisions settled during clarification (count) and any expert requirement overruled, with the reason. Next: `/ux:prototype NNN` or `/ux:implement NNN` — preceded by `/ux:style` if the project has neither tokens nor `.ux/style.md`.
