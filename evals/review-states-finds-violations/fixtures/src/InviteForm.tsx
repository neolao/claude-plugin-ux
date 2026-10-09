import { useState } from "react";
import { invite } from "./api";

export function InviteForm({ onInvited }: { onInvited: () => void }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await invite(email);
    setEmail("");
    onInvited();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Invite</button>
    </form>
  );
}
