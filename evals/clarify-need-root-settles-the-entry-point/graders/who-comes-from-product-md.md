---
type: llm
focus: last_message
criteria: |
  product.md Users gives the operator as expert, daily, at a desk; the
  owner's answers do not restate it.
  PASS if the printed block's who line names the operator with their
  expertise or frequency, and the block attributes it to product.md (on
  the line, or in Facts looked up).
  FAIL if the who line is missing, names another role, or the block
  presents the role as something the owner was asked.
weight: 1
---

Who is a fact of product.md, cited and not asked.
