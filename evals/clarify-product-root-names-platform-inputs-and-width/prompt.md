---
name: clarify-product-root-names-platform-inputs-and-width
description: On a React-inside-Electron app, /ux:clarify kind=product must state what the app is, settle the platform as desktop (Electron) from the code rather than ask it, give the window's minWidth as the smallest width, record the inputs and name the source of the vocabulary
tags: [clarify, product, platform, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:clarify` skill (Skill tool, `skill: "ux:clarify"`) as `/ux:discover` does in its Step 4, with these arguments:

```
kind=product topic="Cuecard" context=
Step 1 — stack: Electron 31 (electron/main.ts creates the BrowserWindow and the application menu) hosting a React 18 renderer under src/renderer/ with HashRouter routes in src/renderer/App.tsx; every route is reached through the menu bar's "navigate" channel, the renderer has no navigation bar. Tokens: CSS custom properties in src/renderer/styles/tokens.css, dark values under :root[data-theme="dark"], the theme set by the main process from nativeTheme. Strings: an English map in src/renderer/strings.ts, no i18n library. Screens: Cue Sheet (/), Cue Library (/library), Preferences (/preferences). Components: Button, Panel. No UI tests. Dev command: npm run dev (electron-vite dev).
Step 2 — README.md: Cuecard is the desktop application a theatre's stage manager uses to write and run the cue sheet of a show, edited during rehearsals and followed live from the prompt corner on a laptop. No CLAUDE.md, no docs/, no glossary.
Step 3 — the application could not be launched (no node_modules, no Electron binary): no captures.
```

The project is in the current directory. There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Users: one stage manager per show, expert, uses it daily during rehearsals and live during performances, on a laptop in the prompt corner, in the dark, under time pressure; mouse + keyboard only.
- Main jobs: write the cue sheet during rehearsals; fire cues in order during the show with one key; insert a preset cue from the library.
- Brand: none; accessibility target: none stated; language: English only; must keep working with no network.
- Vocabulary: cue, standby, GO, cue sheet, cue library — as the README and the strings use them.

Once the skill has finished, print its `## Shared understanding` block in full, exactly as the skill ended with it.
