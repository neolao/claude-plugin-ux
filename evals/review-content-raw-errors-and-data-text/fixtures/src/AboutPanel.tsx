import { t } from "./i18n";
import licenses from "./licenses.json";

export function AboutPanel() {
  return (
    <section>
      <h2>{t("about.title")}</h2>
      <h3>{t("about.licenses")}</h3>
      <dl>
        {licenses.map((lib) => (
          <div key={lib.name}>
            <dt>{lib.name}</dt>
            <dd>{lib.license}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
