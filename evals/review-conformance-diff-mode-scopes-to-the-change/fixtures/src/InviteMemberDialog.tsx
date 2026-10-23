import { useState } from "react";
import { Dialog } from "./Dialog";
import { invite } from "./api";
import { t } from "./i18n";
import { showToast } from "./toast";

// Opened from the Members panel (MemberList.tsx); stays mounted while closed.
export function InviteMemberDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [copy, setCopy] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setFailed(false);
    try {
      await invite(email, copy);
      showToast(t("invite.success", { email }));
      setEmail("");
      onClose();
    } catch {
      setFailed(true);
      setEmail("");
    } finally {
      setSending(false);
    }
  }

  return (
    <Dialog open={open} title={t("invite.title")} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="invite-email">{t("invite.email.label")}</label>
        <input
          id="invite-email"
          type="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {failed && <p role="alert">{t("invite.error.generic")}</p>}
        <label>
          <input type="checkbox" checked={copy} onChange={(e) => setCopy(e.target.checked)} />
          {t("invite.copy")}
        </label>
        <div className="actions">
          <button type="submit" disabled={sending}>
            {sending ? t("invite.sending") : t("invite.send")}
          </button>
          <button type="button" onClick={onClose}>
            {t("invite.cancel")}
          </button>
        </div>
      </form>
    </Dialog>
  );
}
