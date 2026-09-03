---
name: implement
description: Implement a designed flow or screen with the project's components and tokens, every state covered, verified in the running app, then reviewed.
argument-hint: "<NNN flow id> | <screen slug>"
---

# /ux:implement — Build the designed UX in the codebase

Take a spec from `.ux/` and make the real application match it — state by state, with the project's own building blocks. Ends with the code reviewed, the app verified, the spec marked `implemented`.

Reply in the user's language; code, comments and commits follow the project's `CLAUDE.md`. If the skill stops before Step 9 with files changed, commit a coherent unit (`feat(ui): …`) or `wip(ui): …` and say so.

## Step 1 — Context and target

Read `.ux/product.md`, `.ux/inventory.md`, `.ux/style.md` if present, `CLAUDE.md` (conventions, definition of done, test/lint commands, how to run). Resolve `$ARGUMENTS` as `/ux:prototype` Step 1 does (flow → all its screens; slug → one screen); missing spec → say which file was looked for, suggest `/ux:design`, stop.

Gate on `status`: `validated` → proceed · `designed` → warn in one line that no prototype validated it, ask whether to proceed · `implemented` → ask whether this is a rework.

Read the flow, every screen spec, the linked decision, and the prototype if one exists (visual reference).

## Step 2 — Map the spec to the codebase

For each screen and each row of its States and Interactions tables, decide in working notes: **Reuse** (existing component/pattern — the default) · **Extend** (new variant or state on an existing component) · **Create** (justify each in one line). Locate where the screen mounts, where strings live, where tokens are defined, where UI tests for similar screens live, and the platform plumbing (store action + reducer, ViewModel, Unity presenter + view + prefab…).

Tokens:
- inventory has none and `style.md` is `adopted` → first sub-task: create them from `style.md` where the stack expects them (CSS custom properties, theme file, Tailwind config, USS variables, XAML ResourceDictionary…); components consume tokens, never `style.md` values;
- `style.md` has a `## Migration` section → first sub-task: run it in its stated order;
- neither tokens nor an adopted `style.md` → stop and recommend `/ux:style`.

List every **contradiction between spec and codebase** (a state the framework cannot represent, a pattern the project avoids…) and every technical choice with more than one defensible answer.

## Step 2b — Settle open decisions (clarify)

**Invoke `ux:clarify`** (Skill tool, `skill: "ux:clarify"`) with `kind=plan`, `topic="implementation of <flow/screen>"`, `context=` the Step 2 mapping. Its `## Shared understanding` block is what the plan rests on. If a settled answer changes the UX, update the spec (and `.ux/decisions/` if it overrides a decision) before planning.

## Step 3 — Plan (wait for approval)

A short, scannable plan for a developer (file and component names welcome): screens and states grouped by reuse / extend / create; files to touch and create; strings and tokens; how it is tested (the project's conventions — no new test stack); how it is verified for real (launch command, what to click, which states to trigger); the decisions from Step 2b. Approval stays an explicit gate: wait for it; if the user changes the plan, update and present again.

## Step 4 — Implement, state by state

One screen at a time, one state at a time: **Success → Empty → Loading → Partial → Error** — the happy path gives the structure, the others are where UX quality lives; never skip them because "the API rarely fails".

- Reuse before extend before create. Tokens only — a missing token is added where the others live and recorded in the inventory later.
- Every user-facing string goes through the project's i18n, keyed per the Content table; no i18n → one place per screen, flagged in the report.
- Accessibility per the spec: labels, roles, focus order and destination, live announcements, visible focus, target sizes, reduced motion.
- Feedback under 100 ms; progress indication beyond ~1 s.
- Follow the project's testing conventions (TDD if it does TDD); run tests and lint after each meaningful change.

**On-demand expert consultation**: when a question falls squarely in a `ux:expert-*` domain and neither spec, prototype nor codebase answers it, consult that expert (Agent tool, *implementation consultation* mode) instead of guessing — one consultation per expert per screen. These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them. If the answer would change the spec, update it and tell the user.

**Self-correction**: tests or lint fail → diagnose, fix the code (not the test unless it is wrong), re-run; 3 attempts, then stop with a precise diagnosis.

## Step 5 — Verify in the running application

Green tests are not proof. Launch the app (`run` skill, else the dev command with browser tools or the platform's launcher) and, per screen: walk the flow table; **trigger each state** the spec lists for real (empty data, failed request, partial permissions); operate it **keyboard only** once; resize / dock / rotate and check the Layout section holds. Capture to `.ux/captures/NNN-slug/after-<screen>-<state>.png` and reference the captures in the screen spec. Any mismatch is a bug: fix (3 attempts, then report). If the app cannot be launched, say so — never present unverified work as verified.

## Step 6 — Review

**Invoke `ux:review`** (Skill tool, `skill: "ux:review"`) on the current diff. Fix every High finding and the Medium ones touching the screens just built; re-run tests and lint; report the rest as is.

## Step 7 — Update `.ux/`

Screen specs → `status: implemented`, `source:` = implementing files, captures referenced. Flow → `implemented` once all its screens are. `inventory.md` → new/extended components with their states, new tokens with source files, new patterns; close the `Known gaps` this work fixed. `style.md` → if tokens were created or migrated from it, `## Source of truth` = the token files.

## Step 8 — Changelog

If `CHANGELOG.md` exists, add a user-facing line under `[Unreleased]` in the project's section (`Added` / `Changed`).

## Step 9 — Commit

Stage code, tests, i18n files and `.ux/` (never `.env` or secrets); commit per the project's convention, default `feat(ui): <flow title>`. Follow the project's branch/MR workflow; do not push unless `CLAUDE.md` or the user says so.

## Step 10 — Report

Short and plain: what was built (screens × states), reused vs created; test/lint status and runtime verification (states actually triggered, captures); review findings fixed / remaining; spec deviations and why; anything left unverified and why.
