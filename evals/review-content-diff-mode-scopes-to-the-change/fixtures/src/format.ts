export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(d);
}
export function formatMoney(cents: number, currency: string): string {
  return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(cents / 100);
}
