---
type: llm
focus: last_message
criteria: |
  The inventory lists PresetRow (src/ui/widgets/PresetRow.cpp) as the
  component for one preset of the Library.
  PASS if the printed Library screen spec's Layout section names
  PresetRow as the component the duplicate row reuses (or the list of
  PresetRow as a region) and describes the regions in order.
  FAIL if the Layout section is empty, a placeholder, or names no
  existing component.
weight: 1
---

The Layout section is written from expert-visual's regions and the inventory's components.
