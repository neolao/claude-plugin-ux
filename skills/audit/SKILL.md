---
name: audit
description: Heuristic UX audit of the existing interface — captures, Nielsen pass, review agents — written as prioritized findings to .ux/audit/.
argument-hint: "[optional: path, screen name, or area to audit — defaults to the whole UI]"
version: 1.1.0
model: claude-sonnet-5-5
---

# /ux:audit — Audit the existing interface

Evaluate the UI **as it is today** and produce a prioritized, evidence-backed list of problems. Findings feed `/ux:design` (`/ux:design F3` designs the fix for finding F3).

Reply in the user's language; write the report in the project's documentation language.

## Step 1 — Context

Read `.ux/product.md` and `.ux/inventory.md` — if either is missing, **invoke `ux:discover`** (Skill tool) first: an audit without knowing the users is opinion, not evaluation. Keep in mind the user roles, jobs, platform, accessibility target and `Known gaps`.

## Step 2 — Scope

`$ARGUMENTS` is a path → that path. A name → the inventory's Screens table: the screen whose name or entry point matches, scoped to its Source files — several screens when the name is an area they share (a route prefix, a panel, a feature folder). A name matching nothing in the inventory → say so, list the screens, and stop: never audit a guess. Empty → the whole UI layer the inventory lists (every Source of its Screens and Reusable components). Exclude `node_modules/`, `vendor/`, `dist/`, `build/`, `Library/`, generated files, tests. From here on the scope is a list of paths; Steps 3 to 5 take it as is.

## Step 3 — Fresh captures (best effort)

As `/ux:discover` Step 3 (3 launch attempts maximum), saved under `.ux/captures/audit-YYYY-MM-DD/<screen-slug>[-state].png`. Capture non-happy states too: empty list, failed request, long name, narrow window. If nothing can be captured, continue on code only and say so in the report header.

## Step 4 — Heuristic pass (you)

Two axes have no review agent; this pass is their reviewer, under the same rule — **no finding without a capture or a `file:line`**:

- **Flows & navigation** — entry point: each job of `product.md` Jobs to be done starts where the need arises (the inventory's Screens table, Entry point column), not after a detour through another screen; step economy: steps that always follow each other, data re-entered, optional input asked up front; dead ends: a screen with no way forward or back, cancel unreachable mid-flow, abandonment that loses input without saying so; reversibility: "Are you sure?" where undo would do (a confirmation is right only for an irreversible, costly action, and names the consequence), no undo after a destructive action, an undo whose extent is unclear; continuity: after completion the user does not land where the result is visible; interruption: an error or reload at step N restarts at step 1.
- **Platform conventions** — the host's idioms ignored: menus, shortcuts and the host undo stack in a desktop or game-engine tool; Back, gestures and safe areas on mobile; URLs, browser history and the Back button on the web; flags, exit codes and `--help` in a terminal.

Walk each screen in scope with Nielsen's ten heuristics as the lens — status visibility · real-world match · control & freedom · consistency & standards · error prevention · recognition over recall · flexibility & efficiency · minimalism · error recovery · help — and record only what lands on the two axes above, or on no reviewer's axis at all (recognition over recall, help). What a review agent owns — states and feedback, accessibility, wording and localization, token and component reuse, hierarchy and layout, spec conformance — is left to Step 5: it comes back with `file:line` and would only be a duplicate here. Two anchors from `product.md`: who and how often, from Users (daily experts want the fewest steps and shortcuts, novices want guidance); which job, from Jobs to be done.

Record each finding as: screen, axis and criterion, evidence (capture or `file:line`), who it hurts (role), how often (frequency) — both from `product.md`.

## Step 5 — Review agents

**Invoke `ux:review`** (Skill tool, `skill: "ux:review"`) with the scope paths, the same exclusions and, when Step 3 captured anything, the captures folder (`review-visual` reads it: a capture shows what the code only suggests) — it runs the six review agents in audit mode and returns numbered, deduplicated findings with `file:line` evidence.

## Step 6 — Merge and prioritize

Merge the heuristic findings with the review findings (same defect from several angles → one finding, best evidence kept). A screen no `.ux/screens/` spec covers is not a finding — there is nothing to conform to; when `review-conformance` names such screens, carry them to the report's Summary as what `/ux:design` has not specified yet. Map review priorities to impact rows — High → blocks/corrupts, Medium → slows/confuses, Low → cosmetic — then cross **impact** and **reach**:

| | Reach: daily / every user | Reach: weekly / some roles | Reach: rare / one role |
|---|---|---|---|
| **Blocks or corrupts a task** | High | High | Medium |
| **Slows or confuses** | High | Medium | Low |
| **Cosmetic / polish** | Medium | Low | Low |

Reach comes from `product.md` Users and Jobs, not intuition. Accessibility findings that exclude a category of users are High regardless of reach when the project states an accessibility target. Number `F1…Fn` in priority order.

## Step 7 — Write the report

`${CLAUDE_PLUGIN_ROOT}/templates/audit.md` → `.ux/audit/YYYY-MM-DD.md` (`-2`, `-3` suffix if one exists today). Every row has a `Where` a developer can open and a `Recommendation` a designer could act on. `Suggested next designs`: the 3 findings whose fix brings the most value, each as a `/ux:design F<n>` command with the expected gain. Add newly found gaps to `Known gaps` in the inventory.

## Step 8 — Commit

If the project is a git repository: stage `.ux/audit/`, `.ux/captures/audit-*/`, `.ux/inventory.md`; commit `docs(ux): audit YYYY-MM-DD`.

## Step 9 — Report to the user

```
## UX audit — YYYY-MM-DD
Scope: … · Captures: N screens (or none — reason)
Findings: N (High: N, Medium: N, Low: N)

### Top findings
F1 [High] where — issue → recommendation
… (max 8 lines)

### Next
/ux:design F1 — expected gain
Full report: .ux/audit/YYYY-MM-DD.md
```

Short, scannable, no raw agent output.
