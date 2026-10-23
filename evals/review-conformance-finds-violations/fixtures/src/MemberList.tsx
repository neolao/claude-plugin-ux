import { useEffect, useRef, useState } from "react";
import { fetchMembers, Member } from "./api";
import { InviteMemberDialog } from "./InviteMemberDialog";
import { t } from "./i18n";

// Members panel of the board page.
export function MemberList({ boardId }: { boardId: string }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [inviting, setInviting] = useState(false);
  const inviteButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetchMembers(boardId).then(setMembers);
  }, [boardId]);

  function closeInvite() {
    setInviting(false);
    inviteButton.current?.focus();
  }

  return (
    <aside>
      <h2>{t("members.title")}</h2>
      <ul>
        {members.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
      <button ref={inviteButton} onClick={() => setInviting(true)}>
        {t("members.invite")}
      </button>
      <InviteMemberDialog open={inviting} onClose={closeInvite} />
    </aside>
  );
}
