import { t } from "./i18n";
import contacts from "../data/contacts.json";

export function ContactList() {
  return (
    <section>
      <h2>{t("contacts.title")}</h2>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong>
            {c.note && <em>{c.note}</em>}
          </li>
        ))}
      </ul>
    </section>
  );
}
