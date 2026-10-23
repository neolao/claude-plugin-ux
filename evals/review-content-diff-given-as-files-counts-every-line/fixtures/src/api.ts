export type Cue = { id: string; number: number; label: string };
export type Fixture = { id: string; name: string; address: number };

export function fetchCues(): { cues: Cue[]; loading: boolean } {
  return { cues: [], loading: false };
}
export function addCue(): void {}
export function deleteCue(_id: string): Promise<void> {
  return Promise.resolve();
}
export function fetchFixtures(): Fixture[] {
  return [];
}
export function patchFixture(): void {}
