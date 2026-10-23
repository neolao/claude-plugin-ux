const strings: Record<string, string> = {
  "export.title": "Export this board",
  "export.format": "Format",
  "export.run": "Export",
  "export.done": "Export ready — check your downloads.",
  "export.clear": "Clear history",
  "export.clear.confirm": "Clear the export history? This cannot be undone.",
  "export.cleared": "Export history cleared",
};

export function t(key: string): string {
  return strings[key] ?? key;
}
