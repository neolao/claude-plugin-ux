export interface Member { id: string; name: string }

export async function fetchMembers(boardId: string): Promise<Member[]> {
  const res = await fetch(`/api/boards/${boardId}/members`);
  if (!res.ok) throw new Error("members");
  return res.json();
}

export async function invite(email: string, copyToSender = false): Promise<void> {
  const res = await fetch("/api/invitations", { method: "POST", body: JSON.stringify({ email, copyToSender }) });
  if (!res.ok) throw new Error("invite");
}

export async function renameBoard(boardId: string, name: string): Promise<void> {
  const res = await fetch(`/api/boards/${boardId}`, { method: "PATCH", body: JSON.stringify({ name }) });
  if (!res.ok) throw new Error("rename");
}
