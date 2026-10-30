---
type: llm
focus: last_message
criteria: |
  fixtures/src/JobSearch.tsx updates "N jobs" and the result list as the
  query changes, with no live region; fixtures/.ux/inventory.md lists the
  live-region helper `announce` from `src/a11y.ts` under Reusable
  components.
  PASS if a finding targets JobSearch.tsx for the unannounced results and
  its FIX names `announce` (or `src/a11y.ts`) rather than a new live region
  or aria-live attribute alone.
  FAIL otherwise.
weight: 1
---

Fixes the missing announcement with the inventory's helper, not a new mechanism.
