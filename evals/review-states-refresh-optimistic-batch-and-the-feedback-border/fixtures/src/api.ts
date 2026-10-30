export interface Member { id: string; name: string }
export interface Todo { id: string; title: string; done: boolean }
export interface Event { id: string; text: string }

export async function fetchMembers(boardId: string): Promise<Member[]> {
  const res = await fetch(`/api/boards/${boardId}/members`);
  if (!res.ok) throw new Error("members");
  return res.json();
}

export async function setTodoDone(id: string, done: boolean): Promise<void> {
  const res = await fetch(`/api/todos/${id}`, { method: "PATCH", body: JSON.stringify({ done }) });
  if (!res.ok) throw new Error("todo");
}

export async function archiveCard(id: string): Promise<void> {
  const res = await fetch(`/api/cards/${id}/archive`, { method: "POST" });
  if (!res.ok) throw new Error("archive");
}

export async function fetchEvents(boardId: string): Promise<Event[]> {
  const res = await fetch(`/api/boards/${boardId}/events`);
  if (!res.ok) throw new Error("events");
  return res.json();
}
