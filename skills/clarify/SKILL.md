---
name: clarify
description: Grill the user in rounds until nothing is silently assumed — facts looked up, decisions asked with a recommendation. Triggers: "grill me", "stress-test", "clarify", "cuisine-moi".
argument-hint: "<topic to clarify> | kind=<need|product|brand|plan> topic=\"…\" context=<notes> (when invoked by another ux skill)"
version: 1.2.0
model: claude-sonnet-5-5
---

# /ux:clarify — Reach a shared understanding before acting

Adapted from [mattpocock/skills — grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md): mechanics kept as is; UX seeding, `.ux/` grounding and the output contract added for this plugin.

Interview the user relentlessly until you reach a shared understanding. You write nothing — the other skills act on what you settle. Reply in the user's language.

## Mechanics

Map the topic as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled — the questions you can ask *now* without guessing at answers you have not heard yet. Ask the frontier with **`AskUserQuestion`**, never as plain text in the reply — a question the user is not prompted for is not asked:

- One call per round, up to 4 questions; a larger frontier is split across consecutive calls in the same round, most upstream decisions first.
- Each question: `header` ≤ 12 characters, a self-contained `question` ending in `?`, and 2-4 `options` — your recommended answer **first**, labeled `(Recommended)`, its description naming the fact it rests on; the alternatives follow, each with its trade-off. Free-text answers go through the automatic "Other".
- Several answers that can all hold at once → `multiSelect: true`.

Then wait for the answers.

Each round reshapes the tree: settled decisions push the frontier outward — recompute it and ask the next round. A question that depends on one still open belongs to a *later* round. Recompute the frontier from the answers; an "Other" answer that opens new branches adds them to the tree.

**Finding facts is your job, never the user's.** Before the first round, read `.ux/*` (`product.md`, `inventory.md`, `style.md`, `flows/`, `decisions/`) and the `context` you were given: every fact there is settled — cite it in the recommendation, never ask it; reopening a recorded decision is itself a question. When a frontier question needs a fact from the environment, look it up — directly, or via a read-only sub-agent (Agent tool, `subagent_type: "Explore"`) — and do not block: only the questions downstream of a running lookup wait. **The decisions are the user's**: put each to them. A decision the user has already stated — in the topic, in the caller's `context`, in an earlier answer — is settled as `user's choice`: record it, never re-ask it. "I don't know" or "you decide" settles the question on the recommended option, tagged `recommended — user deferred`; when no fact backs that recommendation, say so on the line so the caller can revisit it.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them.

Done when the frontier is empty: every branch visited, nothing silently assumed. Nobody acts until the user confirms.

## Seeding the tree

Parse `$ARGUMENTS` (`kind`, `topic`, `context` when invoked by another skill; otherwise a free topic; empty → ask in one line what to clarify, stop until answered). The roots below must all be visited — prune what the topic makes irrelevant, add what it calls for:

| `kind` | Called by | Root decisions |
|---|---|---|
| `need` | `/ux:design` | who (role, expertise, frequency — from `product.md` Users) · job served (quoted from Jobs to be done, or named as new) · trigger · entry point (the screen, selection or command the user is in when the need arises — a row of the inventory's Screens, or the entry to add and the screen that hosts it) · success criterion · reversibility and risk · data and states (empty, long, failing, concurrent) · platform and input · content and vocabulary · accessibility · scope boundaries |
| `product` | `/ux:discover` | what it is (what it does, for whom, in a sentence) · users (role, expertise, frequency, context of use, main goal) · jobs to be done · platform & surface — what the user runs (a web UI in an Electron or Tauri shell is desktop; a fact when the code has a UI, the user's decision when it has none), every input handled, the smallest width · constraints (brand or design system, accessibility target, localization, performance/offline) · vocabulary (the glossary path when one exists, else the terms the UI strings use) |
| `brand` | `/ux:style` | imposed constraints (colors, logo, typefaces, parent system) · references and anti-references · three adjectives · default density · theming · motion tolerance · iconography · tone of content |
| `plan` | `/ux:implement` | each spec ↔ codebase contradiction · rows kept vs deferred (each deferred state, interaction or criterion with its reason — they go under Out of scope) · where tokens live · extend vs create per component · testing approach · runtime verification path · migration order |
| free topic | the user | derive the roots yourself, starting from "what outcome, for whom" |

A trivial topic yields one round with one or two questions — that is fine.

## Closing

Present the settled tree, get a one-line confirmation (`AskUserQuestion`: confirm / correct), then end with exactly this block — the contract the calling skills consume:

```
## Shared understanding — <topic>
- <Q title>: <settled answer>  (recommended | user's choice | recommended — user deferred)
- …
Facts looked up: <fact → where it was found>
Out of scope (explicitly): <what the user chose to leave out>
```

Standalone, add one line suggesting the next command when the topic calls for one (`/ux:design "<topic>"`, `/ux:style`, …).
