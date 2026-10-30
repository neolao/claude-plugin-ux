const strings: Record<string, string> = {
  "board.title.label": "Name of the board",
};

export function t(key: string): string {
  return strings[key] ?? key;
}
