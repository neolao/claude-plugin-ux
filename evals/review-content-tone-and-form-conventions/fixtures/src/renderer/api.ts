export type Cue = { id: string; number: number; label: string };

export function fetchCues(): Cue[] {
  return [];
}
export function addCue(): void {}
export function deleteCue(_id: string): void {}
export function go(): void {}
export function saveShow(): Promise<void> {
  return Promise.resolve();
}
export function exportShow(): Promise<void> {
  return Promise.resolve();
}
