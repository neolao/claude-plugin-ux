---
type: llm
focus: last_message
criteria: |
  The scales (type sizes, spacing steps) and the palette structure are
  expert-visual's domain.
  PASS if no REQUIREMENTS entry prescribes a type scale (a list of sizes),
  a spacing scale or a palette structure of its own. Requiring the
  editor's font or the editor's control height is fine — that is the
  host's convention, not a scale.
  FAIL if a REQUIREMENTS entry prescribes sizes of a type scale, spacing
  steps or how the palette must be structured.
weight: 1
---

Leaves the scales and palette structure to expert-visual.
