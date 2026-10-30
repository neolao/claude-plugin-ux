import { useEffect, useState } from "react";
import { fetchInvoice, saveInvoice, Invoice } from "./api";
import { showToast } from "./toast";

export function InvoiceEditor({ id }: { id: string }) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setLoadFailed(false);
    fetchInvoice(id).then(setInvoice).catch(() => setLoadFailed(true));
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!invoice) return;
    setSaving(true);
    setSaveError(null);
    try {
      await saveInvoice(invoice);
      showToast(`Invoice ${invoice.number} saved`);
    } catch {
      setSaveError("The invoice could not be saved. Your changes are still here — try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loadFailed) return <p role="alert">Could not load this invoice. Go back to the list and open it again.</p>;
  if (invoice === null) return <p aria-busy="true">Loading invoice…</p>;

  return (
    <form onSubmit={handleSave}>
      <label>
        Customer
        <input value={invoice.customer} onChange={(e) => setInvoice({ ...invoice, customer: e.target.value })} />
      </label>
      <label>
        Total
        <input
          type="number"
          value={invoice.total}
          onChange={(e) => setInvoice({ ...invoice, total: Number(e.target.value) })}
        />
      </label>
      <label>
        <input type="checkbox" checked={invoice.paid} onChange={(e) => setInvoice({ ...invoice, paid: e.target.checked })} />
        Paid
      </label>
      {saveError && <p role="alert">{saveError}</p>}
      <button type="submit" disabled={saving}>{saving ? "Saving…" : "Save"}</button>
    </form>
  );
}
