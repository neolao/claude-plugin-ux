---
id: 001
date: 2026-09-20
status: accepted
flow: 001
---

# Rename a board inline from its title

**Context:** the operator renames a board several times a week while looking at it (audit 2026-09-14, F3: renaming was only reachable through Settings › Boards).
**Options considered:** A — inline rename on the title, Enter saves, Escape cancels; B — a "Rename" button opening a small dialog; C — a rename field in a side panel.
**Decision:** A — inline rename on the title.
**Reason:** the operator is an expert using the board daily; the inventory already has the inline rename pattern in Settings › Boards, so nothing new to learn; no dialog on a one-field change.
**Consequences:** the title must be focusable and announced as editable; a click elsewhere cancels, which the prototype confirmed the operator expects.
