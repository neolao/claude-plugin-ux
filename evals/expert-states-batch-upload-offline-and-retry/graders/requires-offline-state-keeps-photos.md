---
type: llm
focus: last_message
criteria: |
  The photos are on the device, yet without network the Report screen
  shows an empty PhotoGrid and the generic error banner, and Send does
  nothing.
  PASS if a REQUIREMENTS or SCENARIOS entry says that without network
  the photos stay visible (the report is shown from the device's data,
  marked as not sent or offline) and Send either queues the report for
  when the network returns or says clearly that it cannot send now —
  never an empty grid or a generic error for a device-local report.
  FAIL otherwise.
weight: 1
---

Shows an offline state from the local data, never a blank or a generic error.
