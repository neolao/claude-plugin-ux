import { useState } from "react";
import { t } from "./i18n";
import { deleteContact, fetchContacts, importContacts } from "./api";
import logo from "./logo.svg";

export function ContactList() {
  const contacts = fetchContacts();
  const [imported, setImported] = useState<{ added: number; skipped: number } | null>(null);

  return (
    <section>
      <img src={logo} width="96" height="32" />
      <h1>{t("contacts.title")}</h1>
      <label>
        {t("contacts.import.action")}
        <input
          type="file"
          accept=".csv"
          onChange={(e) => e.target.files && importContacts(e.target.files[0]).then(setImported)}
        />
      </label>
      <div role="status" aria-live="polite">
        {imported ? t("contacts.import.done") : ""}
      </div>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.name} — {c.email}
            <button aria-label="trash" onClick={() => deleteContact(c.id)}>
              <svg aria-hidden="true" width="16" height="16"><use href="#icon-trash" /></svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
