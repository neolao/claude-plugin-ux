---
type: llm
focus: last_message
criteria: |
  The spec's States table marks Partial as `n/a: a board is fetched
  whole, with its cards`.
  PASS if the printed prototype HTML offers no switchable Partial state
  in its prototype bar — the bar may show "Partial: n/a" with the
  reason, or omit Partial — and renders no partial view.
  FAIL if the prototype invents a Partial state (a control that switches
  to it, or a rendered partial view).
weight: 1
---

An n/a row gets no state: nothing beyond the spec.
