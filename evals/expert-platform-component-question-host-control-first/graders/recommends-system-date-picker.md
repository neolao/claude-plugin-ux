---
type: llm
focus: last_message
criteria: |
  The question names only a component and the team leans towards a
  custom CalendarGrid.
  PASS if the recommendation is the system date picker (SwiftUI
  DatePicker, UIDatePicker, the iOS date picker in its compact, wheel or
  graphical style) and the custom CalendarGrid is the rejected
  alternative.
  FAIL if the recommendation is the custom grid, or the reply leaves the
  choice open.
weight: 1
---

Recommends the host's own control first.
