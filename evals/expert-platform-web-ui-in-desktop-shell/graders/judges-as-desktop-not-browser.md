---
type: llm
focus: last_message
criteria: |
  The UI is React inside an Electron shell: there is no browser Back
  button, no address bar and no bookmark. The rough option relies on a
  shareable URL and on the browser Back button.
  PASS if no REQUIREMENTS entry demands a deep-linkable or shareable URL,
  the browser Back button or that a refresh restores the view, and the
  reply treats the product as a desktop application (names the desktop
  conventions, Electron or the shell) — flagging the URL/Back reliance as a
  risk is fine.
  FAIL if a REQUIREMENTS entry requires a shareable URL, browser Back or
  refresh behavior, or the reply applies web conventions as if the app ran
  in a browser.
weight: 1
---

Applies the desktop block to a web UI inside a desktop shell.
