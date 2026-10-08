export function fetchBoards(_workspaceId: string): { boards: { id: string; name: string }[]; error?: Error } {
  return { boards: [] };
}
export function createBoard(_workspaceId: string): void {}
export function saveSettings(_workspaceId: string): void {}
export function deleteWorkspace(_workspaceId: string): void {}
