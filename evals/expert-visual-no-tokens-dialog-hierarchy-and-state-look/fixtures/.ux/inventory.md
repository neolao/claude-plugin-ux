# UI inventory — Clientbook

## UI stack

- **Framework / UI layer:** Vue 3, Vite
- **Component library / design system:** none — in-house `src/components/`
- **Styling approach:** scoped CSS in single-file components, literal values
- **UI state management:** Pinia
- **Routing / navigation:** vue-router, `/clients`, `/clients/:id`
- **i18n:** vue-i18n, keys `client.*`, `common.*`
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | — | none (literals in each component) |
| Typography | — | none (system-ui, sizes vary) |
| Spacing | — | none |
| Theming (dark mode…) | — | none |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Client list | /clients | src/pages/ClientList.vue | the active clients | |
| Client page | /clients/:id | src/pages/ClientPage.vue | one client, its contacts and engagements | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Dialog | src/components/Dialog.vue | confirmations and short forms | default |
| Button | src/components/Button.vue | every action | primary, secondary |
| TextField | src/components/TextField.vue | text input with a label | default, error |
| Toast | src/components/Toast.vue | a passing message bottom-left | default |

## Interaction patterns in use

- a saved edit shows a Toast; validation is inline under the field, on blur

## Known gaps

- no design tokens — each component carries its own colors and sizes
- Dialog has no busy state; each dialog handles its request its own way
