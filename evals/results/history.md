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
| 2026-10-08 | review-content | 1.0.0 | review-content-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.48 | 178 339 / 12 254 | First evaluation of the new case (no `effort:` in the frontmatter, `model: sonnet` alias, effort inherited from the session). |
| 2026-10-08 | review-content | 1.0.0 | review-content-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.49 | 178 064 / 12 657 | Repeat of the same definition (an `effort:` edit failed to apply); shows run-to-run cost variance of about $0.01. |
| 2026-10-08 | review-content | 1.0.0 | review-content-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.47 | 178 246 / 11 958 | `effort: medium` written explicitly (model id `claude-sonnet-5-5`). Baseline for the cost cut. |
| 2026-10-08 | review-content | 1.0.0 | review-content-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.48 | 178 894 / 12 449 | Cost cut tried: `effort: low`. Cost not lower than medium ($0.47): reverted to medium. |
| 2026-10-08 | review-content | 1.0.1 | review-content-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 0.89 | 67% | $0.32 | 137 770 / 6 704 | `effort: medium`. New hardening case (diff mode). Case first fixed (hardcoded `count: 12` made a legitimate finding; validation run, not logged). Prompt fix 1: no pseudo-finding blocks, tighter What NOT to do. 1 run in 3 emitted then retracted a block on an unchanged line. |
| 2026-10-08 | review-content | 1.0.1 | review-content-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.44 | 178 664 / 11 517 | `effort: medium`. Regression check after prompt fix 1. |
| 2026-10-08 | review-content | 1.1.0 | review-content-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 1.00 | 100% | $0.28 | 177 704 / 5 552 | `effort: medium`. Prompt fix 2: in diff mode decide scope from the `+` lines before writing a block. Hardening case reaches 1.00. |
| 2026-10-08 | review-content | 1.1.0 | review-content-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.42 | 179 323 / 10 951 | `effort: medium`. Regression check after prompt fix 2. Run ends after hardening. Next: another target has no case yet. |
| 2026-10-09 | review-states | 1.0.1 | review-states-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.53 | 180 777 / 15 433 | `effort: medium` written explicitly (was `model: sonnet`, no effort). First evaluation of the new case. Validation run (not logged): grader `ignores-complete-view` first failed on real findings in the fixture, so the fixture was made cleaner and the grader narrowed to "no state reported missing". Baseline for the cost cut. |
| 2026-10-09 | review-states | 1.0.1 | review-states-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.48 | 178 582 / 13 230 | Cost cut tried: `effort: low`. Cost lower than medium ($0.53): kept. |
| 2026-10-09 | review-states | 1.1.0 | review-states-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 1.00 | 100% | $0.38 | 164 471 / 9 198 | `effort: low`. New hardening case (diff mode). Validation run (not logged) scored 0.80: the agent reported the missing error handling of `fetchProject` on an unchanged line. Prompt fix 1: in diff mode list the `+` lines first, no block outside them, no retracting block, plus a What NOT to do bullet. Reaches 1.00. |
| 2026-10-09 | review-states | 1.1.0 | review-states-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.46 | 179 135 / 12 895 | `effort: low`. Regression check after prompt fix 1. Run ends after hardening. Next: another target has no case yet. |
| 2026-10-16 | review-accessibility | 1.0.1 | review-accessibility-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.54 | 181 581 / 15 151 | `effort: medium` written explicitly (was `model: sonnet`, no effort). First evaluation of the new case; validation run (not logged) scored 1.00. Baseline for the cost cut. |
| 2026-10-16 | review-accessibility | 1.0.1 | review-accessibility-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.52 | 181 003 / 14 212 | Cost cut tried: `effort: low`. Cost lower than medium ($0.54): kept. |
| 2026-10-16 | review-accessibility | 1.1.0 | review-accessibility-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 1.00 | 100% | $0.25 | 137 473 / 5 762 | `effort: low`. New hardening case (diff mode). Validation run (not logged) scored 0.80: the agent reported the unnamed close button on an unchanged context line. Prompt fix 1: in diff mode list the `+` lines first, no block outside them, no retracting block, plus a What NOT to do bullet. Reaches 1.00. |
| 2026-10-16 | review-accessibility | 1.1.0 | review-accessibility-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.50 | 181 229 / 13 595 | `effort: low`. Regression check after prompt fix 1. Run ends after hardening. Next: another target has no case yet. |
| 2026-10-23 | review-visual | 1.0.1 | review-visual-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.49 | 184 674 / 14 276 | `effort: medium` written explicitly (was `model: sonnet`, no effort). First evaluation of the new case. Validation runs (not logged): fixture fixed twice (right-aligned numbers, then unwrapped title/actions and unstyled numbers line made the "sound" view a legitimate finding); score 0.80 → 1.00. Baseline for the cost cut. |
| 2026-10-23 | review-visual | 1.0.1 | review-visual-finds-violations | claude-sonnet-5-5 | 0.93 | 67% | $0.43 | 184 223 / 12 329 | Cost cut tried: `effort: low`. Cost lower ($0.43 vs $0.49) but 1 run in 3 flagged a polish nit on the sound view (`ignores-sound-view`): reverted to medium. |
| 2026-10-23 | review-visual | 1.1.0 | review-visual-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 1.00 | 100% | $0.31 | 156 411 / 8 745 | `effort: medium`. New hardening case (diff mode). Validation run (not logged) scored 0.75: the agent reported the fixed-width `.legacy-banner` shown as a context line. Prompt fix 1: in diff mode list the `+` lines first, no block outside them, no retracting block, plus a What NOT to do bullet. Reaches 1.00. |
| 2026-10-23 | review-visual | 1.1.0 | review-visual-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.43 | 184 159 / 12 551 | `effort: medium`. Regression check after prompt fix 1. Run ends after hardening. Next: another target has no case yet. |
| 2026-10-30 | review-conformance | 1.1.0 | review-conformance-finds-violations | claude-sonnet-5-5 | 0.96 | 67% | $0.67 | 255 415 / 13 760 | `effort: medium`. First evaluation of the case. 1 run in 3 wrote a finding block on MemberList.tsx whose ISSUE concludes "this is not a finding" (`ignores-member-list-without-spec`). |
| 2026-10-30 | review-conformance | 1.1.1 | review-conformance-finds-violations | claude-sonnet-5-5 | 0.93 | 33% | $0.59 | 255 537 / 11 936 | `effort: medium`. Prompt fix 1: decide before writing a block, never write a block to retract, plus a What NOT to do bullet. Worse: 2 runs in 3 still wrote the retracting block. |
| 2026-10-30 | review-conformance | 1.1.1 | review-conformance-finds-violations | claude-sonnet-5-5 | 0.96 | 67% | $0.57 | 240 061 / 12 126 | `effort: medium`. Prompt fix 2: conforming rows go in a `Checked and conforming:` closing line. Still 1 run in 3 with a retracting block on MemberList.tsx. Medium not enough: raised one notch. |
| 2026-10-30 | review-conformance | 1.1.1 | review-conformance-finds-violations | claude-sonnet-5-5 | 1.00 | 100% | $0.62 | 203 790 / 15 676 | `effort: high` (one notch up) with prompt fix 2. Reaches 1.00. Cost cut not retried: medium already failed twice on this definition. |
| 2026-10-30 | review-conformance | 1.1.1 | ⚠️ review-conformance-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 0.95 | 67% | $0.50 | 260 290 / 11 527 | **Obsolete (2026-10-30):** `ignores-untouched-board-header` reworded: only a finding block counts, a closing-line mention is fine (the judge counted the closing line). `effort: high`. First evaluation; 2 runs in 3 failed that grader on a closing-line mention only. |
| 2026-10-30 | review-conformance | 1.1.1 | ⚠️ review-conformance-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 0.95 | 67% | $0.47 | 240 893 / 10 911 | **Obsolete (2026-10-30):** `ignores-unchanged-title` reworded the same way (closing-line mention fine). `effort: high`. After fixing the board-header grader; the title grader failed the same way on a closing-line mention. |
| 2026-10-30 | review-conformance | 1.1.1 | review-conformance-diff-mode-scopes-to-the-change | claude-sonnet-5-5 | 1.00 | 100% | $0.48 | 260 291 / 11 181 | `effort: high`. Both ignores graders now judge finding blocks only. Reaches 1.00. |
| 2026-10-30 | review-conformance | 1.1.1 | review-conformance-stale-na-reason-and-deferred-rows | claude-sonnet-5-5 | 1.00 | 100% | $0.54 | 198 388 / 16 515 | `effort: high`. New hardening case (audit mode: n/a row contradicted by code → "spec may need update", Esc path, deferred Error row, synonym wording, uncovered files). Validation run (not logged) scored 1.00. Run ends after hardening. Next: another target has no case row (e.g. review-consistency). |
