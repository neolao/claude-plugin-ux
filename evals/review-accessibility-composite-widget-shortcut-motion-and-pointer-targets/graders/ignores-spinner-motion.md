---
type: llm
focus: last_message
criteria: |
  fixtures/src/Spinner.tsx renders the `.spinner` of fixtures/src/styles.css,
  a rotating progress indicator shown while a request runs, with
  `role="status"` and an aria-label.
  PASS if no finding targets Spinner.tsx or `.spinner` for motion,
  reduced motion, or an animation that cannot be paused.
  FAIL if one does.
weight: 1
---

Leaves the progress indicator's rotation alone: motion that is the content.
