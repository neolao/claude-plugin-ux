export async function getBoardTitle(boardId: string): Promise<string> {
  const res = await fetch(`/api/boards/${boardId}/title`);
  return res.text();
}

export async function saveBoardTitle(boardId: string, title: string): Promise<void> {
  await fetch(`/api/boards/${boardId}/title`, { method: "PUT", body: title });
}
