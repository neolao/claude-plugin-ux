export interface Label { id: string; name: string }

export async function fetchLabels(boardId: string): Promise<Label[]> {
  const res = await fetch(`/api/boards/${boardId}/labels`);
  if (!res.ok) throw new Error("labels");
  return res.json();
}

export async function saveLabels(boardId: string, labelIds: string[]): Promise<void> {
  const res = await fetch(`/api/boards/${boardId}/labels`, { method: "PUT", body: JSON.stringify({ labelIds }) });
  if (!res.ok) throw new Error("save-labels");
}

export async function renameBoard(boardId: string, name: string): Promise<void> {
  const res = await fetch(`/api/boards/${boardId}`, { method: "PATCH", body: JSON.stringify({ name }) });
  if (!res.ok) throw new Error("rename");
}
