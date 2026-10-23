import { strings } from "./strings";
import { fetchFixtures, patchFixture, unpatchFixture } from "./api";

const s = strings.fixtureList;

export function FixtureList() {
  const fixtures = fetchFixtures();

  return (
    <section>
      <h2>{s.title}</h2>
      {fixtures.length === 0 ? (
        <p>{s.empty}</p>
      ) : (
        <ul>
          {fixtures.map((f) => (
            <li key={f.id}>
              {f.name} @ {f.address}
              <button onClick={() => unpatchFixture(f.id)}>{s.unpatch}</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => patchFixture()}>{s.patch}</button>
    </section>
  );
}
