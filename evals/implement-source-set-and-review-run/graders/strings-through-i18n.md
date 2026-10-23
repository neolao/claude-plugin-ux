---
type: llm
focus: last_message
criteria: |
  The project's i18n layer is t(key, params) from src/i18n.ts; the
  spec's Content table gives the keys board.rename.label, board.renamed,
  board.rename.undo and board.rename.failed.
  PASS if, in the printed src/boards/BoardDetail.tsx, every string the
  user can see or hear for the rename (the input's accessible name, the
  toasts' text, the Undo label) goes through t() — none is a literal in
  JSX or passed as a literal to toast().
  FAIL if any of those strings is a literal in BoardDetail.tsx.
weight: 1
---

Keys every new user-facing string through the project's i18n layer.
