---
type: llm
focus: last_message
criteria: |
  The product is English only and has no i18n layer: strings live in
  src/ui/strings.ts, one object per screen. Adopting an i18n library is a
  product decision, not a wording requirement.
  PASS if no REQUIREMENTS entry demands adopting an i18n library or
  framework (keeping the new strings in strings.ts, keyed, is fine).
  FAIL if a REQUIREMENTS entry requires an i18n library or framework.
weight: 1
---

Does not prescribe an i18n library to a single-language project.
