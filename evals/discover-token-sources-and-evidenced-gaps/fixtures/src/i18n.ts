// Source language: English. French is added by the translation team from this file.
const en: Record<string, string> = {
  "nav.vans": "Vans",
  "nav.settings": "Settings",
  "vans.title": "Vans on the road",
  "vans.column.plate": "Plate",
  "vans.column.run": "Run",
  "vans.column.status": "Status",
  "van.status.ok": "On time",
  "van.status.late": "Late",
  "van.status.offline": "Offline",
  "van.title": "Van {plate}",
  "van.run": "Run {run}",
  "van.nextStop": "Next stop: {stop}",
  "van.loading": "Loading the van…",
  "settings.title": "Settings",
  "settings.lateThreshold": "Minutes before a van counts as late",
  "button.cancel": "Cancel",
};

const fr: Record<string, string> = {
  "nav.vans": "Camionnettes",
  "nav.settings": "Réglages",
};

let locale: "en" | "fr" = "en";

export function setLocale(next: "en" | "fr") {
  locale = next;
}

export function t(key: string, params: Record<string, string | number> = {}): string {
  const table = locale === "fr" ? { ...en, ...fr } : en;
  const template = table[key] ?? key;
  return Object.entries(params).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, String(value)),
    template
  );
}
