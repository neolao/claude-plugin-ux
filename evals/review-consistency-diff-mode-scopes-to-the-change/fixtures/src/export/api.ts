export type ExportRecord = { id: string; format: "csv" | "json"; date: string };

export async function exportBoard(boardId: string, format: "csv" | "json"): Promise<void> {
  await fetch(`/api/boards/${boardId}/export?format=${format}`, { method: "POST" });
}

export async function fetchHistory(boardId: string): Promise<ExportRecord[]> {
  const res = await fetch(`/api/boards/${boardId}/exports`);
  return res.json();
}

export async function clearHistory(boardId: string): Promise<void> {
  await fetch(`/api/boards/${boardId}/exports`, { method: "DELETE" });
}

export async function restoreHistory(boardId: string): Promise<void> {
  await fetch(`/api/boards/${boardId}/exports/restore`, { method: "POST" });
}

export function shareUrl(boardId: string): string {
  return `${location.origin}/boards/${boardId}`;
}
