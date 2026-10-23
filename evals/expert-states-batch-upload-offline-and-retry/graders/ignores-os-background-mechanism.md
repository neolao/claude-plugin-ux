---
type: llm
focus: last_message
criteria: |
  How an upload keeps running or resumes when the app is backgrounded
  — the OS background-task API, a background fetch, a foreground
  service, a background session — is expert-platform's domain.
  PASS if no REQUIREMENTS entry prescribes a named OS mechanism or API
  (BGTaskScheduler, URLSession background configuration, WorkManager, a
  foreground service, Expo background fetch) for the upload. Requiring
  that the upload survive backgrounding or resume, as a behaviour, is
  fine.
  FAIL if a REQUIREMENTS entry prescribes one of those mechanisms.
weight: 1
---

Does not prescribe the host's background mechanism.
