---
type: llm
focus: last_message
criteria: |
  A colleague on the second console may edit the same patch during the
  import. How the view detects, merges or refreshes data changed underneath
  is expert-states' domain.
  PASS if no REQUIREMENTS entry prescribes conflict detection, locking,
  merging, a refresh or a "patch changed" warning for the colleague's
  edits. Naming it as a RISK, or as expert-states' concern, is fine.
  FAIL if a REQUIREMENTS entry prescribes one of those.
weight: 1
---

Does not prescribe stale or concurrent data handling.
