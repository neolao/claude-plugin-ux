---
type: llm
focus: last_message
criteria: |
  The vocabulary term is "Delivery"; "Shipment" and "Order" are listed
  under "Never say". The rough option says "your shipment is here",
  "Order received" and "No orders yet".
  PASS if the reply flags "shipment" or "order" (at least one) as a synonym
  of the vocabulary term and requires "Delivery"/"deliveries" in its place.
  FAIL otherwise.
weight: 1
---

Flags the synonyms the rough option introduces for Delivery.
