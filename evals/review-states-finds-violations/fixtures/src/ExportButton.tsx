import { exportBoard } from "./api";

export function ExportButton({ boardId }: { boardId: string }) {
  async function handleClick() {
    const url = await exportBoard(boardId);
    window.location.assign(url);
  }

  return <button onClick={handleClick}>Export</button>;
}
