---
name: discover
description: Understand the application before designing — detect the UI stack, inventory screens, components and tokens, clarify users and goals, write .ux/product.md and .ux/inventory.md.
argument-hint: "[optional: what the application is, in one sentence]"
---

# /ux:discover — Understand the application

Build the shared understanding every other `/ux:*` command relies on: **who** uses this application, **for what**, on **which platform**, and **what UI already exists**. Output: `.ux/product.md` and `.ux/inventory.md`.

Reply to the user in the language they write in. Write `.ux/` files in the project's documentation language (`## Project language` in `CLAUDE.md` if present, otherwise the language of `README.md`).

## Step 1 — Reconnaissance of the codebase

Detect the UI stack — a project may combine several:

| Signal | Stack / UI layer | Where to look next |
|---|---|---|
| `package.json` with react / vue / svelte / angular / solid | Web SPA or SSR | `src/` components, `pages/`/`app/`/`routes/`, `*.css`/`tailwind.config.*`, `theme*` |
| `package.json` with electron / tauri config | Desktop shell around a web UI | main vs renderer, native menus, window management |
| `*.csproj` + `Assets/` + `ProjectSettings/` | Unity tool or game | `*.uxml`/`*.uss` (UI Toolkit), `*.prefab` with Canvas (uGUI), Editor windows, localization tables |
| `project.godot` | Godot | `*.tscn` Control nodes, `*.tres` themes |
| `*.xcodeproj` / `Package.swift` with SwiftUI/UIKit | iOS / macOS | views, asset catalogs, Localizable strings |
| `build.gradle` with compose / android | Android | composables, `res/values`, themes |
| `pubspec.yaml` | Flutter | widgets, `ThemeData` |
| `*.xaml` | WPF / WinUI / Avalonia / Uno | resource dictionaries, styles |
| `CMakeLists.txt` + Qt | Qt | `.ui`, QSS, QML |
| CLI manifest only (`bin`, `click`, `clap`, `cobra`) | Terminal UI | commands, output formatting, prompts |

For each layer, note: component library / design system; styling approach and **design tokens** (palette, type scale, spacing, radii, breakpoints, motion, theming) **with source files**; screens and how the user reaches them; reusable components and the states they support; i18n mechanism; accessibility tooling; UI tests; dev/run command.

Ignore `node_modules/`, `vendor/`, `dist/`, `build/`, `Library/` (Unity), generated files.

## Step 2 — Existing knowledge

Read, if present: `README.md`, `CLAUDE.md` (and `.claude/rules/`), `docs/`, `.vibe/`, design references (Figma links, `DESIGN.md`, style guides), PRDs. A glossary, if one exists, is the source of truth for terms.

If `.ux/product.md` already exists, sections whose heading carries `<!-- keep -->` are preserved verbatim in Step 5.

## Step 3 — See the real application (best effort)

Try in order, stop at the first that works, **3 launch attempts maximum**: the `run` skill (Skill tool, `skill: "run"`) → browser tools with the dev command → a scriptable screenshot path (Playwright, Unity batch capture, Electron flag).

Save captures under `.ux/captures/baseline/<screen-slug>.png` and reference them in the inventory's Screens table. If a screenshot cannot be written, still look at it and describe it in the table. If the app cannot be launched, say so in the report; the inventory is then code-derived and `Known gaps` says so.

## Step 4 — Clarify with the user

**Invoke `ux:clarify`** (Skill tool, `skill: "ux:clarify"`) with `kind=product`, `topic="<application name>"`, `context=` your notes from Steps 1–3 plus `$ARGUMENTS`. Its `## Shared understanding` block fills `product.md`'s Users, Jobs, Context and Constraints. Do not write `product.md` before the user has confirmed it.

## Step 5 — Write `.ux/`

From `${CLAUDE_PLUGIN_ROOT}/templates/product.md` and `templates/inventory.md`: fill **every** placeholder from what you found — no template text left, no invented facts; unknowns go under `Known gaps`. Tokens with their **source file**; components with the **states they support**; `Known gaps` is the honest list `/ux:audit` starts from.

Create `.ux/README.md` from `${CLAUDE_PLUGIN_ROOT}/templates/ux-readme.md` if absent.

## Step 6 — Hook into `CLAUDE.md`

If the project has a `CLAUDE.md` without the marker `<!-- ux:context -->`, append (adapted only for language):

```markdown
## UX context <!-- ux:context -->

Product understanding and UI inventory live in `.ux/`. Read `.ux/product.md` before changing anything user-facing, `.ux/inventory.md` before adding a component or a style — reuse what exists — and `.ux/style.md` (when present) before choosing any color, font or spacing. Specs: `.ux/flows/`, `.ux/screens/`.
```

If the marker exists, leave it. If there is no `CLAUDE.md`, do not create one — mention it in the report.

## Step 7 — Commit

If the project is a git repository: stage `.ux/` (and `CLAUDE.md` if changed) and commit `docs(ux): discover product context and UI inventory`. Never stage anything else.

## Step 8 — Report

Short and plain: platform and stack; design system / tokens found or not; screens and components inventoried; whether the app was captured; the 2–3 most notable `Known gaps`; what clarification settled that the codebase could not tell. Next: `/ux:audit` or `/ux:design "<need>"` — and `/ux:style` first if no tokens were found.
