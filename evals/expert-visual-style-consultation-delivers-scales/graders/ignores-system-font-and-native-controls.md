---
type: llm
focus: last_message
criteria: |
  What looks native on the platform — the system font stack, native
  control shapes, how the OS theme setting is read — is
  expert-platform's domain.
  PASS if no REQUIREMENTS entry prescribes the system font (system-ui,
  the OS's font) in place of the direction's family, native or
  OS-shaped controls, or the mechanism that reads the OS theme. Requiring
  a dark value per role is fine.
  FAIL if a REQUIREMENTS entry prescribes one of those.
weight: 1
---

Leaves what looks native to expert-platform.
