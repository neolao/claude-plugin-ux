# Ledgerline

Ledgerline is the invoicing back end of a small accounting firm: it stores the invoices the accountants issue for their clients and computes what is overdue. Today it is an HTTP API consumed by a spreadsheet macro. A web dashboard for the accountants is planned for next quarter; nothing of it exists yet.

## Development

```
npm install
npm start
```

The API listens on port 4000. Routes are under `src/routes/`.
