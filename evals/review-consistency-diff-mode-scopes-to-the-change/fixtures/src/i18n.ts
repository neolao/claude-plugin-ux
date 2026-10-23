const strings: Record<string, string> = {
  "export.title": "Export this board",
  "export.format": "Format",
  "export.run": "Export",
  "export.done": "Export ready — check your downloads.",
  "export.clear": "Clear history",
  "export.cleared": "Export history cleared",
  "share.copy": "Copy link",
  "share.copied": "Link copied",
  "share.hint": "Anyone with the link can view the board.",
};

export function t(key: string): string {
  return strings[key] ?? key;
}
