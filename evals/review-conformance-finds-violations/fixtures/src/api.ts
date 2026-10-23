export interface Member { id: string; name: string }

export async function fetchMembers(boardId: string): Promise<Member[]> {
  const res = await fetch(`/api/boards/${boardId}/members`);
  if (!res.ok) throw new Error("members");
  return res.json();
}

export async function invite(email: string): Promise<void> {
  const res = await fetch("/api/invitations", { method: "POST", body: JSON.stringify({ email }) });
  if (!res.ok) throw new Error("invite");
}

// Resolves with the number of members created from the file.
export async function importMembersCsv(file: File): Promise<number> {
  const body = new FormData();
  body.append("file", file);
  const res = await fetch("/api/members/import", { method: "POST", body });
  if (!res.ok) throw new Error("import");
  return (await res.json()).count;
}
