---
name: expert-platform-terminal-tui-and-scripts
description: On a terminal need with a full-screen view expert-platform must split data from progress, make colors optional with NO_COLOR, require a plain-output fallback without a TTY and a terminal restored on exit and Ctrl+C, and must prescribe neither the wording of messages nor the refresh timing
tags: [expert-platform, recall, precision, terminal]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-platform` sub-agent (Agent tool, `subagent_type: "ux:expert-platform"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — watch a rollout and abort it
- Who: deploy engineer, expert, daily, at the desk during a rollout or in a CI job  (recommended)
- Job: watch a rollout's progress node by node and abort it at once when it goes wrong  (user's choice)
- Trigger: a rollout was just started  (recommended)
- Success: the engineer sees each node's state as it changes and can stop the rollout from the same place; a CI job can run the same command  (user's choice)
- Reversibility: an abort cannot be undone; the rollout can be started again  (user's choice)
- Platform and input: terminal, keyboard; also run without a terminal in CI  (recommended)
Facts looked up: `--output table|json`, errors on stderr → inventory.md Interaction patterns; colors always on, no TTY check → inventory.md Known gaps
Out of scope (explicitly): the abort strategy on the fleet side

Rough option in mind:
- A new `shipctl rollout watch <id>` opens a full-screen view listing the nodes; the view refreshes every 10 s and shows nothing between two refreshes
- Progress lines ("node 3/12 done") are printed on stdout, followed by the JSON summary when the rollout ends, so a CI job can parse the output
- Colors are always on, like the other commands; a failed node is written in red as "ERR 42"
- Pressing A aborts; Ctrl+C is captured and ignored so the engineer does not leave by mistake
- When the rollout ends the view stays painted on the terminal and the shell prompt appears under it
- Without a terminal attached the command waits for a key press like in a terminal

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
