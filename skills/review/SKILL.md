---
name: review
description: UI/UX review of a diff or path through the review agents (states, accessibility, content, consistency, visual, conformance); --fix applies High and Medium fixes.
argument-hint: "[path | diff | --fix]"
version: 1.0.0
model: claude-sonnet-5-5
---

# /ux:review — Review UI changes against UX quality and the specs

Critique the **user-facing result** of a change, not its architecture: are all states handled, is it accessible, is the copy right, does it reuse the design system, does it match the `.ux/` spec. Code-architecture concerns belong to other reviewers. Without `--fix`, this skill changes nothing — the report is the deliverable.

Reply in the user's language.

## Step 1 — Context

Read `.ux/product.md`, `.ux/inventory.md` and `.ux/style.md` if they exist (if not, review anyway with less grounding — say so and suggest `/ux:discover`). Read the `.ux/screens/*.md` and `.ux/flows/*.md` whose `source:` or `screens:` intersect the scope — the conformance reference.

## Step 2 — Scope

`$ARGUMENTS` contains `--fix` → **fix mode**, strip it. Remaining text is a path → review that path (audit mode; when invoked by `/ux:audit`, apply the exclusions it passes). `diff` or empty → the current change: uncommitted changes plus the branch's commits not on the default branch (`git diff $(git merge-base HEAD <default-branch>)` + working tree); outside a git repository, ask for a path and stop.

Keep UI-relevant files only (components, views, pages, panels, styles, templates, `*.uxml`/`*.uss`, `*.xaml`, `*.prefab`/`*.unity` diffs, i18n files, UI tests); exclude generated and vendored files. Nothing left → say so and stop.

## Step 3 — Run the review agents in parallel

Launch all six `ux:review-*` agents **in one message** (Agent tool, `subagent_type: "ux:review-<axis>"`: states, accessibility, content, consistency, visual, conformance) — conformance only when a spec intersects the scope. Give each: the mode (`diff` or `audit`), the exact file list or diff, the paths of `product.md`, `inventory.md`, `style.md` and the relevant specs. They are read-only; wait for their completion notifications — do not poll.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them. If launches are blocked, say so and stop rather than report a partial review as complete.

## Step 4 — Deduplicate and prioritize

Merge findings pointing at the same defect (strongest evidence kept, axes listed). Severity → priority: `high` → **High** (task impossible, user excluded or misled) · `medium` → **Medium** (slows or confuses; breaks a clear convention or the spec) · `low` → **Low** (polish). Drop findings without a concrete `file:line` or capture. Number `1…n`, High first.

## Step 5 — Fix (fix mode only)

Apply High and Medium fixes one at a time: apply → tests and lint → if broken, revert and try another approach (3 attempts, then leave the finding open with a diagnosis). Never touch Low findings automatically. Never change the spec to make the code conform — if the spec is wrong, say so and leave the finding open.

## Step 6 — Report

```
## UI/UX review
Scope: <diff | path> · Files: N · Specs: <NNN, slug… | none>
Findings: N (High: N, Medium: N, Low: N)

### High
1. [axis] file:line — issue. Evidence: … → Fix: …
### Medium / ### Low
…
### Applied fixes / ### Left open   (fix mode only)
```

Numbered so findings can be discussed one by one. Defects only — no praise; none found → one line.
