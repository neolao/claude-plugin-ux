> Manual page — kept in sync by hand with README.md when skills change.

# Demo website

The showcase site <https://neolao.github.io/claude-plugin-ux/> is served by GitHub Pages from `docs/` on `main`. **There is no build step**: `docs/index.html` is a single self-contained page (inline CSS/JS, zero CDN) — edit the file, push, and deployment takes one to two minutes.

## Rules

- `docs/.nojekyll` must stay present, so GitHub Pages serves the HTML as-is.
- No skill in this plugin touches the site files (`index.html`, `.nojekyll`, non-Markdown assets) — `ux` has no equivalent of `/vibe:docs` that regenerates documentation.
- The marketing content (benefits, command table, agent grid, `.ux/` anatomy, typical flow) is derived from `README.md` and resynchronized **by hand** when the skills change.

## Terminal demos

The animated demos are scripted in the `DEMOS` JS object at the bottom of `index.html`. Line types:

| Type | Behavior |
|---|---|
| `cmd` | typed at the keyboard |
| `out` | printed directly |
| `run` | spinner, resolved via `after` + `done` |
| `gap` | vertical spacing |

Adding a demo = one `.term` block with `data-demo="<key>"` in the HTML + a matching entry in `DEMOS`. Six commands are currently shown (`discover`, `style`, `design`, `prototype`, `implement`, `review`) — `clarify` is left out because it already shows up inside the other demos, and `audit` is left out to avoid a second "list of findings" demo next to `review`.

## Mobile pitfalls (fixed — do not reintroduce)

- `overflow-x: clip` on `html` + `body` must stay.
- The hero glow is capped at `min(900px, 130vw)`.
- The command table collapses to stacked cards below 640 px.
- The `.tree` block (`.ux/` anatomy) and the paired agent badges in `#agents` must stay inside their container on narrow screens — check both at 640 px after any edit.

## Verifying without a browser

- `node --check` on the extracted inline script,
- tag-balance check with a Python HTML parser,
- `python3 -m http.server` from `docs/` for a manual look.
