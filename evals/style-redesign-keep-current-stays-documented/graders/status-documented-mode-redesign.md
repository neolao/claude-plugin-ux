---
type: llm
focus: last_message
criteria: |
  The owner kept the current system: nothing changed, so style.md
  describes an existing system, not an adopted direction.
  PASS if the printed .ux/style.md frontmatter has `status: documented`
  and `mode: redesign`.
  FAIL if `status:` is `adopted` (or anything but documented), or
  `mode:` is not redesign.
weight: 1
---

Keeping the current system is written as a documented system under the redesign mode.
