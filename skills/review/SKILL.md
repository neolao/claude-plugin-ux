---
name: review
description: UI/UX review of a diff or path through the review agents (states, accessibility, content, consistency, visual, conformance); --fix applies High and Medium fixes.
argument-hint: "[path… | diff [path…]] [--fix]"
version: 1.1.0
model: claude-sonnet-5-5
---

# /ux:review — Review UI changes against UX quality and the specs

Critique the **user-facing result** of a change, not its architecture: are all states handled, is it accessible, is the copy right, does it reuse the design system, does it match the `.ux/` spec. Code-architecture concerns belong to other reviewers. Without `--fix`, this skill changes nothing and writes no file — the report of Step 6 is the deliverable, returned as the reply whether the user ran `/ux:review` or a skill invoked it (`/ux:audit` Step 5, `/ux:implement` Step 6 read it as is).

Reply in the user's language.

## Step 1 — Context

Read `.ux/product.md`, `.ux/inventory.md` and `.ux/style.md` if they exist (if not, review anyway with less grounding — say so and suggest `/ux:discover`). The conformance reference: the `.ux/screens/*.md` whose `source:` intersects the scope, and the `.ux/flows/*.md` whose `screens:` list one of them. In diff mode take them whatever their `status:` — the change may be what implements them (`/ux:implement` fills `source:` and runs this review before marking `implemented`). In audit mode only `status: implemented` is a reference: a spec still `designed` or `validated` (a redesign, a flow waiting for `/ux:implement`) describes what is not built yet and every row would come back `missing` — name it under Not assessed instead of passing it to conformance.

## Step 2 — Scope

`$ARGUMENTS` contains `--fix` → **fix mode**, strip it. A calling skill may add `exclusions: <paths or globs>` and `captures: <folder>` (`/ux:audit` Step 3, `/ux:implement` Step 5) — strip them too, they go to Step 3. What remains:

- paths → **audit mode**: those paths, whole;
- `diff` or empty → **diff mode** on the current change: the working tree, untracked files included, plus the branch's commits not on the default branch (`git diff $(git merge-base HEAD <default-branch>)`);
- `diff` followed by paths, or a caller naming the files it created or changed → **diff mode** on those files, every line of them counted as added — the only way to hand over a change outside a git repository; `diff` alone outside one → ask for the files touched and stop.

Keep UI-relevant files only (components, views, pages, panels, styles, templates, `*.uxml`/`*.uss`, `*.xaml`, `*.prefab`/`*.unity` diffs, i18n files, UI tests); exclude generated and vendored files and the caller's exclusions. Nothing left → say so and stop.

## Step 3 — Run the review agents in parallel

Launch all six `ux:review-*` agents **in one message** (Agent tool, `subagent_type: "ux:review-<axis>"`: states, accessibility, content, consistency, visual, conformance) — conformance only when Step 1 found a spec for the scope. Give each what its Input contract lists: the mode (`diff` or `audit`), the exact file list or diff plus the exclusions (a change given as files: say that every line of them counts as added), the paths of `product.md`, `inventory.md`, `style.md` and the screen specs of Step 1 with their `status:`; conformance also gets the flows; visual also gets the captures folder when there is one. They are read-only; wait for their completion notifications — do not poll. An agent that fails or returns without its closing line (`N … findings …`, or its "none" form) is relaunched once with the same prompt; still nothing → its axis goes under Not assessed in the report, never counted as clean.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them. If launches are blocked, say so and stop rather than report a partial review as complete.

## Step 4 — Deduplicate and prioritize

Two findings are the same defect when they point at the same `file:line` or element **and** say the same thing is wrong (an unhandled fetch error found by states and by conformance as the spec's Error row): keep one, with the strongest evidence, the highest severity and the axes listed. Two reasons at one line (a literal color flagged by consistency, its contrast by accessibility; a hardcoded string by content, its non-focusable element by accessibility) stay two findings. Severity → priority: `high` → **High** (task impossible, user excluded or misled) · `medium` → **Medium** (slows or confuses; breaks a clear convention or the spec) · `low` → **Low** (polish). Drop findings without a concrete `file:line` or capture. Number `1…n`: High, then Medium, then Low; within a priority, in file order, so the reader walks each file once.

## Step 5 — Fix (fix mode only)

Apply High and Medium fixes one at a time: apply → the project's tests and lint (the commands `CLAUDE.md` or the package scripts name; none → the fix is applied and reported as unverified) → if broken, revert and try another approach (3 attempts, then leave the finding open with a diagnosis). Never touch Low findings automatically. Never change the spec to make the code conform — a FIX saying `spec may need update` is a UX question for the user, not a code fix: leave the finding open and say so. Fixes stay uncommitted: the report lists them, the user commits.

## Step 6 — Report

```
## UI/UX review
Scope: <diff | path> · Files: N · Specs: <NNN (status), slug (status)… | none> · Captures: <folder | none>
Findings: N (High: N, Medium: N, Low: N)

### High
1. [axis] file:line — issue. Evidence: … → Fix: …
### Medium / ### Low
…
### Not assessed   (omitted when empty)
- what the agents' closing lines name — a gap, never a finding: screens or files no spec covers and specs not yet implemented (for `/ux:design`, `/ux:implement`); no scale to judge values against, a Known gap met in scope (for `/ux:style`, `/ux:design`); an axis not reviewed because its agent returned nothing
### Applied fixes / ### Left open   (fix mode only)
```

Numbered so findings can be discussed one by one. Defects only — no praise; none found → one line, plus Not assessed when there is one.
