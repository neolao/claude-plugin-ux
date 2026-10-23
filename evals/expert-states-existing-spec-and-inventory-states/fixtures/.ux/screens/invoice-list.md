---
slug: invoice-list
title: Invoice list
flow: 002
status: implemented
source: src/invoices/InvoiceList.tsx
---

# Invoice list

## Purpose

See the company's invoices and find the ones to chase.

## Layout

A DataTable filling the page under the title; sortable by due date and amount.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | the company has issued no invoice yet | DataTable empty variant with a hint and "New invoice" | New invoice |
| Loading | page opened, list refetched after an action | DataTable skeleton rows | — |
| Partial | n/a: the list is one request of 300 invoices at most, never paginated, and every accountant sees every invoice | | |
| Success | the request returns | the rows, overdue ones marked | open an invoice |
| Error | the request fails | DataTable inline error with Retry | Retry |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| row | click | opens /invoices/:id | row highlight |
| column header | click | sorts | arrow on the header |
