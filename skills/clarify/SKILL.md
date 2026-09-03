---
name: clarify
description: Grill the user in rounds until nothing is silently assumed — facts looked up, decisions asked with a recommendation. Triggers: "grill me", "stress-test", "clarify", "cuisine-moi".
argument-hint: "<topic to clarify> | kind=<need|product|brand|plan> topic=\"…\" context=<notes> (when invoked by another ux skill)"
---

# /ux:clarify — Reach a shared understanding before acting

Adapted from [mattpocock/skills — grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md): mechanics kept as is; UX seeding, `.ux/` grounding and the output contract added for this plugin.

Interview the user relentlessly until you reach a shared understanding. You write nothing — the other skills act on what you settle. Reply in the user's language.

## Mechanics

Map the topic as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled — the questions you can ask *now* without guessing at answers you have not heard yet. Ask the whole frontier in one round, numbered, each with your recommended answer, then wait:

```
❓ **Q1** - **<question title>**: <question body — may span paragraphs and offer choices>

➡️ <your recommended answer, and the fact it rests on>

---

❓ **Q2** - **<question title>**: <question body>

➡️ <your recommended answer>
```

Each round reshapes the tree: settled decisions push the frontier outward — recompute it and ask the next round. A question that depends on one still open belongs to a *later* round. The user may answer "all recommended".

**Finding facts is your job, never the user's.** Before the first round, read `.ux/*` (`product.md`, `inventory.md`, `style.md`, `flows/`, `decisions/`) and the `context` you were given: every fact there is settled — cite it in the recommendation, never ask it; reopening a recorded decision is itself a question. When a frontier question needs a fact from the environment, look it up — directly, or via a read-only sub-agent (Agent tool, `subagent_type: "Explore"`) — and do not block: only the questions downstream of a running lookup wait. **The decisions are the user's**: put each to them.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them.

Done when the frontier is empty: every branch visited, nothing silently assumed. Nobody acts until the user confirms.

## Seeding the tree

Parse `$ARGUMENTS` (`kind`, `topic`, `context` when invoked by another skill; otherwise a free topic). The roots below must all be visited — prune what the topic makes irrelevant, add what it calls for:

| `kind` | Called by | Root decisions |
|---|---|---|
| `need` | `/ux:design` | who (role, expertise, frequency) · job served · trigger · success criterion · reversibility and risk · data and states (empty, long, failing, concurrent) · platform and input · content and vocabulary · accessibility · scope boundaries |
| `product` | `/ux:discover` | users and expertise · main jobs · context of use (frequency, device, environment) · platform and devices · constraints (brand, accessibility, languages, performance/offline) · vocabulary |
| `brand` | `/ux:style` | imposed constraints (colors, logo, typefaces, parent system) · references and anti-references · three adjectives · default density · theming · motion tolerance · iconography · tone of content |
| `plan` | `/ux:implement` | each spec ↔ codebase contradiction · where tokens live · extend vs create per component · testing approach · runtime verification path · migration order |
| free topic | the user | derive the roots yourself, starting from "what outcome, for whom" |

A trivial topic yields one round with one or two questions — that is fine.

## Closing

Present the settled tree, get a one-line confirmation, then end with exactly this block — the contract the calling skills consume:

```
## Shared understanding — <topic>
- <Q title>: <settled answer>  (recommended | user's choice)
- …
Facts looked up: <fact → where it was found>
Out of scope (explicitly): <what the user chose to leave out>
```

Standalone, add one line suggesting the next command when the topic calls for one (`/ux:design "<topic>"`, `/ux:style`, …).
