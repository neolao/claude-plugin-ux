---
name: audit
description: Heuristic UX audit of the existing interface — captures, Nielsen pass, review agents — written as prioritized findings to .ux/audit/.
argument-hint: "[optional: path, screen name, or area to audit — defaults to the whole UI]"
---

# /ux:audit — Audit the existing interface

Evaluate the UI **as it is today** and produce a prioritized, evidence-backed list of problems. Findings feed `/ux:design` (`/ux:design F3` designs the fix for finding F3).

Reply in the user's language; write the report in the project's documentation language.

## Step 1 — Context

Read `.ux/product.md` and `.ux/inventory.md` — if either is missing, **invoke `ux:discover`** (Skill tool) first: an audit without knowing the users is opinion, not evaluation. Keep in mind the user roles, jobs, platform, accessibility target and `Known gaps`.

## Step 2 — Scope

`$ARGUMENTS` given → that path, screen (resolved via the inventory's Screens table) or area. Empty → the whole UI layer listed in the inventory. Exclude `node_modules/`, `vendor/`, `dist/`, `build/`, `Library/`, generated files, tests.

## Step 3 — Fresh captures (best effort)

As `/ux:discover` Step 3 (3 launch attempts maximum), saved under `.ux/captures/audit-YYYY-MM-DD/<screen-slug>[-state].png`. Capture non-happy states too: empty list, failed request, long name, narrow window. If nothing can be captured, continue on code only and say so in the report header.

## Step 4 — Heuristic pass (you)

For each screen in scope, evaluate against Nielsen's ten heuristics — status visibility · real-world match · control & freedom · consistency & standards · error prevention · recognition over recall · flexibility & efficiency · minimalism · error recovery · help — **grounded in a capture or a code location**; no finding without evidence. Two anchors come from `product.md`: wording is judged against its Vocabulary; density and shortcuts against its Users table (daily experts vs novices).

Record each finding as: screen, heuristic, evidence (capture or `file:line`), who it hurts (role), how often (frequency) — both from `product.md`.

## Step 5 — Review agents

**Invoke `ux:review`** (Skill tool, `skill: "ux:review"`) on the scope path with the same exclusions — it runs the six review agents in audit mode and returns numbered, deduplicated findings with `file:line` evidence.

## Step 6 — Merge and prioritize

Merge the heuristic findings with the review findings (same defect from several angles → one finding, best evidence kept). Map review priorities to impact rows — High → blocks/corrupts, Medium → slows/confuses, Low → cosmetic — then cross **impact** and **reach**:

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
