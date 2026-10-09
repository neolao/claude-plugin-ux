export interface Board { id: string; name: string }
export interface Card { id: string; title: string }

export async function fetchBoards(): Promise<Board[]> {
  const res = await fetch("/api/boards");
  if (!res.ok) throw new Error("boards");
  return res.json();
}

export async function fetchCards(boardId: string): Promise<Card[]> {
  const res = await fetch(`/api/boards/${boardId}/cards`);
  if (!res.ok) throw new Error("cards");
  return res.json();
}

export async function invite(email: string): Promise<void> {
  const res = await fetch("/api/invitations", { method: "POST", body: JSON.stringify({ email }) });
  if (!res.ok) throw new Error("invite");
}

// Resolves once the archive has been generated server-side, then returns its URL.
export async function exportBoard(boardId: string): Promise<string> {
  const res = await fetch(`/api/boards/${boardId}/export`, { method: "POST" });
  if (!res.ok) throw new Error("export");
  return (await res.json()).url;
}
