import en from "../locales/en.json";

export function t(key: keyof typeof en, params: Record<string, unknown> = {}): string {
  return en[key].replace(/\{(\w+)[^}]*\}/g, (_, k) => String(params[k] ?? ""));
}
