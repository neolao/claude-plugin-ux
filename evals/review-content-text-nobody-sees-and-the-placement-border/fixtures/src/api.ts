export type Contact = { id: string; name: string; email: string };

export function fetchContacts(): Contact[] {
  return [];
}
export function deleteContact(_id: string): void {}
export function importContacts(_file: File): Promise<{ added: number; skipped: number }> {
  return Promise.resolve({ added: 0, skipped: 0 });
}
export function saveContact(_c: Partial<Contact>): { fieldErrors: Record<string, string> } {
  return { fieldErrors: {} };
}
export function activityPerMonth(): number[] {
  return [];
}
