import { Router } from "express";

type Invoice = { id: string; client: string; amount: number; dueDate: string; paidAt?: string };

const store = new Map<string, Invoice>();

export const invoices = Router();

invoices.get("/", (_request, response) => {
  response.json([...store.values()]);
});

invoices.get("/overdue", (_request, response) => {
  const today = new Date().toISOString().slice(0, 10);
  response.json([...store.values()].filter((invoice) => !invoice.paidAt && invoice.dueDate < today));
});

invoices.post("/", (request, response) => {
  const invoice = request.body as Invoice;
  store.set(invoice.id, invoice);
  response.status(201).json(invoice);
});

invoices.post("/:id/paid", (request, response) => {
  const invoice = store.get(request.params.id);
  if (!invoice) {
    response.status(404).end();
    return;
  }
  invoice.paidAt = new Date().toISOString();
  response.json(invoice);
});
