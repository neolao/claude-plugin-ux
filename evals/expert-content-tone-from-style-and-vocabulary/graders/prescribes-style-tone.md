---
type: llm
focus: last_message
criteria: |
  style.md "Tone of content" states a terse tone: no exclamation marks, no
  emoji, no first person. The Users table alone (occasional clerks) would
  suggest a warmer tone, and the rough option's copy is warm and exclamatory
  ("Woohoo", "nice one!", "Oops", emoji).
  PASS if the reply requires the terse tone of style.md for the copy, or
  names the exclamation marks, the emoji or "Woohoo"/"Oops" as departing
  from it, and proposes replacement strings without them.
  FAIL if the reply endorses or proposes warm, exclamatory or emoji copy
  because the users are occasional, or does not address the tone at all.
weight: 1
---

Takes the tone from style.md, not from the Users table.
