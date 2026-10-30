import { useEffect, useState } from "react";
import { fetchVans, Van } from "./api";
import { Spinner } from "./Spinner";

export function VanPanel() {
  const [vans, setVans] = useState<Van[] | null>(null);

  useEffect(() => {
    fetchVans().then(setVans);
  }, []);

  if (vans === null) return <Spinner label="Loading vans" />;

  return (
    <section aria-label="Vans">
      <h2>
        Vans <span className="live-dot" aria-hidden="true" /> live
      </h2>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            {van.name} — {van.position}
          </li>
        ))}
      </ul>
    </section>
  );
}
