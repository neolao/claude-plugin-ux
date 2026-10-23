import { t } from "./i18n";
import { fetchFixtures, patchFixture } from "./api";

export function FixtureList() {
  const fixtures = fetchFixtures();

  return (
    <section>
      <h2>{t("fixtures.title")}</h2>
      {fixtures.length === 0 ? (
        <p>No lights patched yet</p>
      ) : (
        <ul>
          {fixtures.map((f) => (
            <li key={f.id}>
              {f.name} @ {f.address}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => patchFixture()}>{t("fixtures.patch")}</button>
    </section>
  );
}
