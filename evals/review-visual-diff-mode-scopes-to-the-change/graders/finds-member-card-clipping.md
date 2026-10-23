---
type: llm
focus: last_message
criteria: |
  The change adds .member-card (fixed 340px width and 72px height,
  nowrap, overflow hidden) used by fixtures/src/MemberCard.tsx: long names,
  roles or several tag chips are clipped with no wrapping or truncation
  rule.
  PASS if a finding targets .member-card or MemberCard.tsx for the fixed
  size, the clipping or the missing wrapping.
  FAIL otherwise.
weight: 1
---

Reports the fixed-size member card that clips its content.
