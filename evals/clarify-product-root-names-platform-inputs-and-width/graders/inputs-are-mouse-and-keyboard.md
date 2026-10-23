---
type: llm
focus: last_message
criteria: |
  The owner said "mouse + keyboard only".
  PASS if the printed block has a line (under platform, devices or
  inputs) saying the inputs are mouse and keyboard, marked as the user's
  choice or stated as given — and lists no touch, pen or gamepad input.
  FAIL if inputs are not in the block, or an input the owner did not name
  is listed as handled.
weight: 1
---

Records every input handled, and only those.
