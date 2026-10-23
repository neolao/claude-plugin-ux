import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listVans, type Van } from "../api";
import { StatusBadge } from "../components/StatusBadge";
import { t } from "../i18n";

function VanRow({ van }: { van: Van }) {
  return (
    <tr className="border-b">
      <td className="py-1">
        <Link to={`/vans/${van.plate}`} className="text-brand-500 underline">
          {van.plate}
        </Link>
      </td>
      <td>{van.run}</td>
      <td>
        <StatusBadge status={van.status} />
      </td>
    </tr>
  );
}

// Route /vans. The dispatcher's landing page.
export function VanList() {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {
    listVans().then(setVans);
  }, []);

  return (
    <section>
      <h1 className="mb-3 text-xl font-semibold">{t("vans.title")}</h1>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>{t("vans.column.plate")}</th>
            <th>{t("vans.column.run")}</th>
            <th>{t("vans.column.status")}</th>
          </tr>
        </thead>
        <tbody>
          {vans.map((van) => (
            <VanRow key={van.plate} van={van} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
