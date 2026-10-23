---
type: llm
focus: last_message
criteria: |
  Without a terminal attached the command waits for a key press; every
  command must work in a CI job.
  PASS if a REQUIREMENTS or SCENARIOS entry demands that without a TTY
  (or behind a flag) the command fall back to plain, non-interactive
  output and never wait for a key press.
  FAIL otherwise.
weight: 1
---

Keeps a non-interactive mode for scripts and CI.
