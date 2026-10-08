import en from "../locales/en.json";

export function t(key: keyof typeof en): string {
  return en[key];
}
