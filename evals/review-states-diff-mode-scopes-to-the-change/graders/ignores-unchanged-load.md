---
type: llm
focus: last_message
criteria: |
  fixtures/src/ProjectPage.tsx line 11 `fetchProject(id).then(setProject)`
  (no catch) and the `Loading project…` branch are on lines the diff
  neither adds nor modifies.
  PASS if no finding targets the project load (missing catch / error state
  of `fetchProject`) or the `Loading project…` branch.
  FAIL if one does.
weight: 1
---

Does not flag the pre-existing project load outside the diff.
