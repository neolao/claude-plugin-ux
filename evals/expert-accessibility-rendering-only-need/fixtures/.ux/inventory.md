# Inventory

## UI stack
Vue 3 + TypeScript, plain CSS. No component library.

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | src/styles/tokens.css | --surface #0b1220, --text #e5e7eb, --ok #16a34a, --warn #f59e0b, --down #dc2626 |
| Typography | src/styles/tokens.css | 16 / 20 / 28 / 48 |
| Motion | src/styles/tokens.css | --fast 150ms, --slow 300ms |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Overview | / | src/views/Overview.vue | all services at a glance | — |
