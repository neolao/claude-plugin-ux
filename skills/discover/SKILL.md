---
name: discover
description: Understand the application before designing — detect the UI stack, inventory screens, components and tokens, clarify users and goals, write .ux/product.md and .ux/inventory.md.
argument-hint: "[optional: what the application is, in one sentence]"
version: 1.1.0
model: claude-sonnet-5-5
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

No UI layer found (a service, a library, a project not started): say so and skip Step 3. `product.md` is still written from Step 4 — the platform the user names is a decision, not a finding. The inventory's UI stack says `none yet`, its tokens are `none`, its Screens and Reusable components tables have no rows, and `Known gaps` opens with `no UI yet`. The report sends to `/ux:style`, then `/ux:design`.

## Step 2 — Existing knowledge

Read, if present: `README.md`, `CLAUDE.md` (and `.claude/rules/`), `docs/`, `.vibe/`, design references (Figma links, `DESIGN.md`, style guides), PRDs. A glossary, if one exists, is the source of truth for terms.

If `.ux/product.md` or `.ux/inventory.md` already exists, this run is a refresh. In both files, sections whose heading carries `<!-- keep -->` are preserved verbatim in Step 5; the rest is rewritten from what Steps 1–4 find. In the inventory: keep the screen names that `.ux/screens/`, `.ux/flows/` and `.ux/audit/` already use — they reference screens by name; carry over the `Known gaps` that `/ux:audit`, `/ux:style` and `/ux:implement` added, dropping only those the code now shows closed; keep the components and tokens `/ux:implement` recorded when they still exist in the code.

## Step 3 — See the real application (best effort)

Try in order, stop at the first that works, **3 launch attempts maximum**: the `run` skill (Skill tool, `skill: "run"`) → browser tools with the dev command → a scriptable screenshot path (Playwright, Unity batch capture, Electron flag).

Save captures under `.ux/captures/baseline/<screen-slug>.png` and reference them in the inventory's Screens table. If a screenshot cannot be written, still look at it and describe it in the table. If the app cannot be launched, say so in the report; the inventory is then code-derived and every Capture cell says `none — <reason>`.

## Step 4 — Clarify with the user

**Invoke `ux:clarify`** (Skill tool, `skill: "ux:clarify"`) with `kind=product`, `topic="<application name>"`, `context=` your notes from Steps 1–3 plus `$ARGUMENTS`. Its `## Shared understanding` block fills `product.md`'s What it is, Platform & surface, Users (their context of use is a column there), Jobs to be done, Constraints and Vocabulary; its `Facts looked up` line says which of them the code settled. Do not write `product.md` before the user has confirmed it.

## Step 5 — Write `.ux/`

From `${CLAUDE_PLUGIN_ROOT}/templates/product.md` and `${CLAUDE_PLUGIN_ROOT}/templates/inventory.md`: fill **every** placeholder from what you found — no template text left, no invented facts; unknowns go under `Known gaps`. Tokens with their **source file**; components with the **states they support**; `Known gaps` is the honest list `/ux:audit` starts from.

`product.md`:
- **Platform** — what the user runs, not what the code is written in: a web UI in Electron or Tauri is `desktop (Electron)` / `desktop (Tauri)`, never `web`; a Unity panel is `game-engine tool (Unity)` even when it is a Unity build; several surfaces (a web app and a mobile app, an editor tool also shipped standalone) are each listed with the folder that holds them. `expert-platform` applies one block per surface named here.
- **Devices & input** — every input the UI handles (mouse + keyboard, touch, pen, gamepad) and the smallest width it is built for, with where that comes from: the smallest breakpoint found, the narrowest a panel docks, the phone widths targeted. `expert-visual` and `expert-platform` take widths and inputs from this line; the inventory's Breakpoints row only records the token values.
- **Runs with** — the command or URL that worked in Step 3; when none did, the dev command found, marked `(untested)`. `/ux:audit` and `/ux:implement` launch the app from this line.
- **Vocabulary** — when the project has a glossary, the section opens with its path (`expert-content` and `review-content` look for it in `.ux/` and `CLAUDE.md`) and mirrors its terms; without one, the terms the UI strings and the README already use, and no invented definition.

`inventory.md`:
- **UI stack** — lines name files, not only libraries: *Framework / UI layer* names the shell and the web framework both when a desktop shell wraps a web UI (`Electron 31 — React 18 renderer`), and one line per layer, each with its folder, when a repository holds several; *Routing / navigation* says where routes, menus or scene loading are declared (`expert-platform` shapes entry points from it); *i18n* names the layer, its key format, the file holding the strings and their source language (`expert-content` writes copy in that language). Several surfaces: the Screens' Source column tells them apart.
- **Design tokens** — *Source file* is where the project defines the value: a theme or config file (`tailwind.config.*`, `theme.ts`, a tokens JSON), USS variables, a ResourceDictionary, `ThemeData`. Never a vendored or generated stylesheet (a library's CSS, a build output): name those under Styling approach as what ships or generates the styles. A third-party design system used as is → `library defaults` in Values, the project's override or theme file as Source when there is one. No token for a family → `none` as Source and where the literals live as Values. *Theming* is never blank: `single theme`, or the mechanism with its source file (`[data-theme]`, `prefers-color-scheme`, `darkMode` in the Tailwind config, `EditorGUIUtility.isProSkin`), the themes it carries and whether it follows the OS or editor setting — `review-consistency` judges every color against this row.
- **Screens / views** — one row per route or page on the web, per window and dockable panel on desktop, per editor window or custom panel in a game-engine tool, per screen on mobile, per subcommand or full-screen view in a terminal; a dialog, menu or toast is a component or a state of its screen, not a row. *Entry point* is the way there as the user sees it: the route and the control that leads to it (`/boards/:id` — a row of the Boards list), the menu path (`Window › Fixtures`), the subcommand — `expert-flows` starts flows there. *Source* is the file(s) that render the screen, paths from the repository root — `/ux:audit` resolves a screen name to them. *Capture* is the path under `.ux/captures/`.
- **Reusable components** — a row per component used from at least two screens or living in a shared place (`components/`, `ui/`, a design-system package, a prefab library); a component local to one screen is not a row. *States / variants supported* are the ones the code implements — read its props, variants, sub-classes or style states — not the ones it should have; what it lacks goes to `Known gaps`.
- **Known gaps** — each line says where it was seen (`file:line`, a capture, or `not found: <what was looked for, where>`) and reads as one of two kinds: a reference that does not exist (no tokens, no shared empty state, two confirmation styles coexist) or drift from one that does (literal colors while a palette exists, a hardcoded string beside the i18n layer). `/ux:audit` confirms them as leads and `review-consistency` tells the kinds apart; a line with no place to look is not a gap.

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
