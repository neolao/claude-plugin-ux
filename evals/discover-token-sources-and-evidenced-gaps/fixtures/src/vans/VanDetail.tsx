import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVan, type Van } from "../api";
import { Button } from "../components/Button";
import { StatusBadge } from "../components/StatusBadge";
import { t } from "../i18n";

// Route /vans/:plate, reached from a row of VanList.
export function VanDetail() {
  const { plate = "" } = useParams();
  const navigate = useNavigate();
  const [van, setVan] = useState<Van | null>(null);

  useEffect(() => {
    getVan(plate).then(setVan);
  }, [plate]);

  if (!van) {
    return <p>{t("van.loading")}</p>;
  }

  return (
    <article className="max-w-xl">
      <h1 className="mb-2 text-xl font-semibold">{t("van.title", { plate: van.plate })}</h1>
      <StatusBadge status={van.status} />
      <p className="mt-3">{t("van.run", { run: van.run })}</p>
      <p>{t("van.nextStop", { stop: van.nextStop })}</p>
      <Button variant="secondary" className="mt-4" onClick={() => navigate("/vans")}>
        {t("button.cancel")}
      </Button>
    </article>
  );
}
