export type Contact = { id: string; name: string; note: string };

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export class OfflineError extends Error {}

export function importContacts(_path: string): Promise<{ added: number; skipped: number }> {
  return Promise.reject(new ApiError(422, "422 Unprocessable Entity: row 14: email is not valid"));
}

export function fetchContacts(): Contact[] {
  return [];
}
