---
type: llm
focus: last_message
criteria: |
  package.json has "dev": "electron-vite dev"; the application could not
  be launched in this run.
  PASS if the printed .ux/product.md Runs with line gives `npm run dev`
  (or `electron-vite dev`) and marks it untested, not run, or not
  verified.
  FAIL if the line is empty, gives another command, or presents the
  command as having worked.
weight: 1
---

Records the dev command found without claiming it ran.
