import en from "../locales/en.json";

export function t(key: keyof typeof en, params: Record<string, unknown> = {}): string {
  return en[key].replace(/\{(\w+)[^}]*\}/g, (_, k) => String(params[k] ?? ""));
}

export function formatTime(d: Date): string {
  return new Intl.DateTimeFormat(undefined, { timeStyle: "short" }).format(d);
}
