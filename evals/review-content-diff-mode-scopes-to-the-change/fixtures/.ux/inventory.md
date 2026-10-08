# Inventory

## Stack
React 18 + TypeScript.

## Internationalization
User-visible text goes through `t(key, params)` from `src/i18n.ts`, keys in `locales/en.json`. Plurals use ICU syntax in the message (`{count, plural, one {…} other {…}}`). Dates and numbers go through `formatDate` / `formatMoney` from `src/format.ts`.
