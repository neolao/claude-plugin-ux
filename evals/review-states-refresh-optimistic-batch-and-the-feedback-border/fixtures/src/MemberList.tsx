import { useCallback, useEffect, useState } from "react";
import { fetchMembers, Member } from "./api";

export function MemberList({ boardId }: { boardId: string }) {
  const [members, setMembers] = useState<Member[] | null>(null);
  const [failed, setFailed] = useState(false);

  const load = useCallback(() => {
    setFailed(false);
    setMembers(null);
    fetchMembers(boardId).then(setMembers).catch(() => setFailed(true));
  }, [boardId]);

  useEffect(load, [load]);

  if (failed) {
    return (
      <div role="alert">
        <p>Could not load the members.</p>
        <button onClick={load}>Try again</button>
      </div>
    );
  }
  if (members === null) return <p aria-busy="true">Loading members…</p>;

  return (
    <div>
      <button onClick={load}>Refresh</button>
      {members.length === 0 ? (
        <p>No members yet. Invite a colleague to this board.</p>
      ) : (
        <ul>{members.map((m) => <li key={m.id}>{m.name}</li>)}</ul>
      )}
    </div>
  );
}
