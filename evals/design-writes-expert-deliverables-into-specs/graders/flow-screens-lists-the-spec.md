---
type: llm
focus: last_message
criteria: |
  /ux:prototype builds every screen in the flow's `screens:` list.
  PASS if the printed flow file's `screens:` frontmatter lists the slug
  of every screen spec printed under .ux/screens/ (at least the Library
  screen's slug), and no slug without a printed spec.
  FAIL if `screens:` is empty, still the template's placeholder
  (screen-slug-a, screen-slug-b), or names a slug with no spec file.
weight: 1
---

The flow lists its screens; prototype and review resolve them through that list.
