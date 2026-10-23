import { useState } from "react";
import { Dialog } from "./Dialog";
import { invite, importMembersCsv } from "./api";
import { t } from "./i18n";
import { showToast } from "./toast";
import "./styles.css";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Opened from the Members panel (MemberList.tsx); stays mounted while closed.
export function InviteMemberDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [sending, setSending] = useState(false);

  function handleCancel() {
    setEmail("");
    setInvalid(false);
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email)) {
      setInvalid(true);
      return;
    }
    setSending(true);
    await invite(email);
    setSending(false);
    showToast(t("invite.success", { email }));
    setEmail("");
    onClose();
  }

  async function handleCsv(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const count = await importMembersCsv(file);
    showToast(t("invite.csv.done", { count }));
    onClose();
  }

  return (
    <Dialog open={open} title={t("invite.title")} onClose={handleCancel} className="invite-dialog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="invite-email">{t("invite.email.label")}</label>
        <input
          id="invite-email"
          type="email"
          autoFocus
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setInvalid(false);
          }}
          onBlur={() => setInvalid(email !== "" && !EMAIL.test(email))}
          aria-invalid={invalid}
          aria-describedby={invalid ? "invite-email-hint" : undefined}
        />
        {invalid && (
          <p id="invite-email-hint" role="alert">
            {t("invite.email.invalid")}
          </p>
        )}
        <div className="actions">
          <button type="submit" disabled={sending}>
            {sending ? t("invite.sending") : t("invite.send")}
          </button>
          <button type="button" onClick={handleCancel}>
            {t("invite.cancel")}
          </button>
        </div>
      </form>
      <label>
        {t("invite.csv.label")}
        <input type="file" accept=".csv" onChange={handleCsv} />
      </label>
    </Dialog>
  );
}
