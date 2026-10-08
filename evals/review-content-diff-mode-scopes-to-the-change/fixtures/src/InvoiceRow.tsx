import { t } from "./i18n";
import { formatDate, formatMoney } from "./format";
import { deleteInvoice, sendInvoice } from "./api";

export function InvoiceRow({ invoice }: { invoice: Invoice }) {
  if (!invoice) return <p>Loading…</p>;
  if (!invoice.number) throw new Error("invoice.number missing");
  const summary = t("invoice.count", { count: invoice.monthCount });
  return (
    <tr>
      <td title={summary}>{invoice.number}</td>
      <td>{`${invoice.issuedAt.getDate()}/${invoice.issuedAt.getMonth() + 1}/${invoice.issuedAt.getFullYear()}`}</td>
      <td>{formatMoney(invoice.cents, invoice.currency)}</td>
      <td>
        <button onClick={() => sendInvoice(invoice.id)}>{t("invoice.send")}</button>
        <button onClick={() => deleteInvoice(invoice.id)}>{t("invoice.delete")}</button>
      </td>
    </tr>
  );
}
