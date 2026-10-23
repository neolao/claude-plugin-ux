---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md has no Vocabulary section. Within the scope,
  fixtures/src/strings.ts names the same concept `Fixtures` / `Patch
  fixture` / `Unpatch fixture` and, in `fixtureList.empty`, `lights`
  (`No lights patched yet. Patch a light to control it.`).
  PASS if a finding reports `light`/`lights` in that empty message as a
  second name for the concept the rest of the scope calls fixture.
  FAIL otherwise.
weight: 1
---

Reports two names for one concept, judged against the scope's own strings when there is no vocabulary.
