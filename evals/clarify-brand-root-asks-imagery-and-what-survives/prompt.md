---
name: clarify-brand-root-asks-imagery-and-what-survives
description: In redesign mode, /ux:clarify kind=brand must settle imagery, what of the current system survives (the GO and standby colors) and take the OS-following theming from the code as a fact
tags: [clarify, brand, redesign, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:clarify` skill (Skill tool, `skill: "ux:clarify"`) as `/ux:style` does in its Step 3, with these arguments:

```
kind=brand topic="visual direction of Cuecard" context=
Mode: redesign (--redesign given; a design system exists).
Tokens: CSS custom properties in src/renderer/styles/tokens.css — colors (bg, panel, text, muted, accent #c2410c, go #15803d, standby #b45309), spacing 4/8/12/16, radius 3px, a UI font stack and a mono font, one duration 120ms; dark values under :root[data-theme="dark"], the theme set by electron/main.ts from nativeTheme (follows the OS).
Assets: no logo, no brand colors, no marketing site, no style guide.
product.md Constraints: brand none; accessibility target none stated; English only; must work with no network.
Users: one stage manager per show, expert, daily, on a laptop in the prompt corner, in the dark, under time pressure.
Hints: none.
```

The project is in the current directory: an Electron application with its main process under `electron/` and its React renderer under `src/renderer/`. There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Adjectives: calm, legible, instant. Anti-references: consumer apps with gradients and illustrations.
- What must survive the redesign: the green GO and amber standby colors — stage managers read them in the dark and they are the same in every theatre's cue software.
- Imagery: none — no illustrations, no photos, a plain text empty state.
- Density: compact; the cue table must show forty cues on the laptop screen.
- Motion: none beyond the 120 ms state changes; nothing animates during the show.
- Iconography: none; labels only.

Once the skill has finished, print its `## Shared understanding` block in full, exactly as the skill ended with it.
