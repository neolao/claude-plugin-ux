export type Slot = { id: string; start: Date };

export function freeSlots(_roomId: string): Slot[] {
  return [];
}
export function book(_roomId: string, _slot: Slot, _hours: number): Promise<void> {
  return Promise.resolve();
}
export function toast(_message: string): void {}
