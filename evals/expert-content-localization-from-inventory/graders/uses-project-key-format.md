---
type: llm
focus: last_message
criteria: |
  The inventory states the key format screen.element.purpose (the rough
  option's toast already uses booking.toast.success); the rough option
  names its other keys str1, str2, btnOk, str3, str4.
  PASS if the reply flags those key names or proposes keys in the
  screen.element.purpose format (dotted, at least two segments, naming the
  screen or feature and the element, e.g. booking.panel.title,
  booking.confirm.action) for the strings it delivers.
  FAIL if the reply keeps str1/btnOk-style keys, or delivers strings with
  no keys at all.
weight: 1
---

Proposes keys in the format the inventory records.
