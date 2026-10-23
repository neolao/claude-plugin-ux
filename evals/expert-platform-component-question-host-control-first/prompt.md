---
name: expert-platform-component-question-host-control-first
description: On an implementation question that only names a component expert-platform must recommend the system date picker with the custom grid as the rejected alternative, name what the custom grid loses, keep each OS's own picker, and must prescribe neither the picker's styling nor the field's label wording
tags: [expert-platform, recall, precision, mobile, implementation-consultation]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-platform` sub-agent (Agent tool, `subagent_type: "ux:expert-platform"`) as `/ux:implement` does when a question falls in its domain. Give it exactly this prompt:

```
Implementation consultation, from /ux:implement.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md.

Question: which date picker for the "Due date" field of the Inspection form? The screen spec says "a date field in a FormRow", the inventory has no date control yet, and the team leans towards a custom CalendarGrid view (a month grid drawn with our tokens, swipe between months) so the field looks exactly like the Android build's custom grid.

Code context — Screens/InspectionForm.swift:

    FormRow(label: "Due date") {
        // TODO: date control — CalendarGrid(selection: $viewModel.dueDate) ?
    }

DesignSystem/FormRow.swift wraps one labeled row; the other rows of this form hold TextField and the system Picker.

Reply with one concrete, justified recommendation plus the rejected alternative, in a few sentences.
```

Once the sub-agent returns, report its reply back verbatim.
