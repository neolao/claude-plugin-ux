---
name: expert-content-localization-from-inventory
description: On an English + Arabic product with i18next, expert-content must flag the concatenated "hour(s)" line, the hand-formatted date and the "arrow on the right" helper, propose keys in the project's screen.element.purpose format, and must neither flag the correct interpolated toast nor prescribe RTL layout mirroring
tags: [expert-content, recall, precision, localization, rtl]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-content` sub-agent (Agent tool, `subagent_type: "ux:expert-content"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — book a meeting room from the floor plan
- Who: office employee, occasional user, a few times a month, from a laptop  (recommended)
- Job: reserve a free room for a meeting starting soon, without asking reception  (user's choice)
- Trigger: the employee clicks a room on the floor plan  (recommended)
- Success: the room shows as booked under the employee's name for the chosen slot  (recommended)
- Reversibility: a booking can be cancelled from the same panel until it starts  (user's choice)
- Platform and input: web, desktop browser, mouse + keyboard; English and Arabic UI  (recommended)
Facts looked up: languages and RTL → product.md Constraints; i18n keys and source file → inventory.md UI stack
Out of scope (explicitly): recurring bookings

Rough option in mind:
- Clicking a room opens a side panel: the room name, today's free slots as a list, a duration picker (1 to 4 hours) and a primary button
- Proposed copy and keys — panel title: "Book " + roomName (key: str1); helper above the slot list: "Pick a slot on the right, then confirm with the arrow → below" (key: str2); primary button: "Book" (key: btnOk); confirmation line under the button, built as "Booked " + roomName + " for " + count + " hour(s) on " + day + "/" + month + "/" + year (key: str3); toast on success: t('booking.toast.success', { room: roomName }) with the string "Room {room} booked"
- Empty slot list: "No free slot today" (key: str4)

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
