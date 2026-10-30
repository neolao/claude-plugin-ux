import { useCallback, useEffect, useState } from "react";
import { fetchInvoices, Invoice } from "./api";

export function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[] | null>(null);
  const [failed, setFailed] = useState(false);

  const load = useCallback(() => {
    setFailed(false);
    setInvoices(null);
    fetchInvoices().then(setInvoices).catch(() => setFailed(true));
  }, []);

  useEffect(load, [load]);

  if (failed) {
    return (
      <div role="alert">
        <p>Could not load the invoices.</p>
        <button onClick={load}>Try again</button>
      </div>
    );
  }
  if (invoices === null) return <p aria-busy="true">Loading invoices…</p>;

  return (
    <table>
      <tbody>
        {invoices.map((i) => (
          <tr key={i.id}>
            <td>{i.number}</td>
            <td>{i.customer}</td>
            <td>{i.total}</td>
            <td>{i.paid ? "Paid" : "Open"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
