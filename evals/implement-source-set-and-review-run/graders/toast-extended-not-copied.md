---
type: llm
focus: last_message
criteria: |
  The fixture's src/toast.ts exports toast(kind, message) with no way to
  attach an action; the spec's success toast carries an Undo action. The
  inventory lists toast as the project's component for success and error
  messages.
  PASS if the printed src/toast.ts now accepts an optional action (a
  label and a callback, under any name) and the final report names no new
  toast module or component created for the Undo.
  FAIL if src/toast.ts is unchanged and the Undo lives in a new toast or
  notification helper, or if the Undo is rendered by an ad-hoc element in
  BoardDetail.tsx instead of the toast.
weight: 1
---

Extends the inventory's component with the missing variant instead of a local copy.
