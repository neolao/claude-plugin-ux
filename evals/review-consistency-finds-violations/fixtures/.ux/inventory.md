# Inventory

## UI stack

- **Framework / UI layer:** React 18 + TypeScript
- **Component library / design system:** in-house, `src/components/`
- **Styling approach:** plain CSS, one file next to each component, values from the custom properties in `src/tokens.css`
- **i18n:** `t(key)` from `src/i18n.ts`, strings in the same file
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | src/tokens.css | `--color-primary`, `--color-on-primary`, `--color-surface`, `--color-surface-raised`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-focus`, `--color-error`, `--color-success` — roles in `.ux/style.md` § Palette |
| Typography | src/tokens.css | `--font-size-sm` / `-md` / `-lg` = 12 / 14 / 16 px |
| Spacing | src/tokens.css | `--space-1` … `--space-6` = 4 / 8 / 12 / 16 / 24 / 32 px |
| Radii / borders | src/tokens.css | `--radius-control` 4 px, `--radius-card` 8 px; borders 1 px `--color-border` |
| Theming (dark mode…) | src/tokens.css | `[data-theme="dark"]` on the root redefines every `--color-*` |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Button | src/components/Button.tsx | every clickable action | variant primary / secondary / danger; size md / sm; disabled |
| Dialog | src/components/Dialog.tsx | modal forms | open, closed |
| Toast | src/toast.ts | passing feedback, with an optional Undo action | plain, with undo |

## Interaction patterns in use

- success shown as a toast (`showToast` from `src/toast.ts`)
- a destructive action runs at once and its toast offers Undo — no confirmation dialog
- validation inline on blur

## Known gaps

- no shared empty-state component — each list renders its own markup
