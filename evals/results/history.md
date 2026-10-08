# Eval history

Tracks `claude plugin eval` scores over time — one row per meaningful run, so a
model or agent-definition change can be compared against what came before.
Full reports (`report.html`, `aggregate-result.json`) are regenerated on every
run and gitignored; this file is the only thing kept.

Cost and tokens matter alongside the score: two runs with the same score are
not equal if one gets there for fewer tokens/$. Cost comes straight from the
CLI's own totals (agent + judge, summed over the case's runs). Tokens require
extra work the CLI doesn't do on its own — see below — so older rows logged
before this practice started show `n/a`.

**A changed case retires its own history.** Editing a fixture, adding,
splitting, or removing a grader, or changing weights changes *what* the score
measures — a later run is then neither better nor worse than an earlier one,
it measures something else. Mark every existing row for that case with ⚠️ in
the Case cell and open its Notes with
`**Obsolete (YYYY-MM-DD):** <what changed in the case>`. Never delete the row
and never touch its figures: it stays as the record of what that version of
the case measured. Comparison restarts from the first run after the change.

**How to get the token figures:** run the case with `--keep-temp` and a
fixed `--output-dir` (no extra API cost — it only skips deleting the
sandbox), then run `../tokens.py` on that same directory:

```bash
claude plugin eval . --case '<case-name>' --scaffold --judge-model sonnet \
  --ablation none --keep-temp --trust-plugin --no-publish \
  --output-dir evals/results/<case-name>
python3 evals/tokens.py evals/results/<case-name> --cleanup
```

It prints the `Tokens in/out` line to copy into the column: in =
`inputTokens + cacheCreationInputTokens + cacheReadInputTokens`, out =
`outputTokens`, summed across models (main agent and sub-agents) and across
the case's runs. The judge's tokens are not counted — only its cost is, in
the Cost column. Before printing, the script reconciles its count with the
CLI's cost and stops with an error on a mismatch, a missing trace or an
interrupted run: write that error in the Notes, never a guessed figure.
`--cleanup` deletes exactly the kept dirs of that run — never
`rm -rf /private/tmp/e-*`, which could belong to another run in progress.
A case that grants `Bash` runs in Docker instead: `../docker/run.sh` adds the
same flags and runs `tokens.py` in the same container (see
`../docker/README.md`).

| Date | Agent | Agent version | Case | Model | Score | Pass rate | Cost (N runs) | Tokens in/out (N runs) | Notes |
|---|---|---|---|---|---|---|---|---|---|
