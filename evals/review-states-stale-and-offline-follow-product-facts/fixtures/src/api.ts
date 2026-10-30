export interface Invoice { id: string; number: string; customer: string; total: number; paid: boolean }

export async function fetchInvoices(): Promise<Invoice[]> {
  const res = await fetch("/api/invoices");
  if (!res.ok) throw new Error("invoices");
  return res.json();
}

export async function fetchInvoice(id: string): Promise<Invoice> {
  const res = await fetch(`/api/invoices/${id}`);
  if (!res.ok) throw new Error("invoice");
  return res.json();
}

export async function saveInvoice(invoice: Invoice): Promise<void> {
  const res = await fetch(`/api/invoices/${invoice.id}`, { method: "PUT", body: JSON.stringify(invoice) });
  if (!res.ok) throw new Error("save-invoice");
}
