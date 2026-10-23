import { useState } from "react";
import { t } from "./i18n";
import { saveContact } from "./api";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFieldErrors(saveContact({ email }).fieldErrors);
      }}
    >
      {fieldErrors.email && <p role="alert">{t("contacts.form.email.invalid")}</p>}
      <fieldset>
        <p>Fields marked with * are required.</p>
        <p>Use the same spelling as on the sign-up sheet.</p>
        <p>Contacts are sorted by last name.</p>
      </fieldset>
      <label>
        {t("contacts.form.email.label")}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">{t("contacts.form.save")}</button>
    </form>
  );
}
