export type Board = { id: string; name: string; archived: boolean };
export type Card = { id: string; title: string };

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  const response = await fetch(`/api${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`${method} ${path} → ${response.status}`);
  return response.status === 204 ? (undefined as T) : response.json();
}

export const fetchBoards = () => request<Board[]>("GET", "/boards");
export const fetchBoard = (id: string) => request<Board & { cards: Card[] }>("GET", `/boards/${id}`);
export const archiveBoard = (id: string) => request<void>("POST", `/boards/${id}/archive`);
export const renameBoard = (id: string, name: string) => request<Board>("PATCH", `/boards/${id}`, { name });
export const deleteBoard = (id: string) => request<void>("DELETE", `/boards/${id}`);
