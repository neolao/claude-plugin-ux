export {};

declare global {
  interface Window {
    rolodex: {
      showOpenDialog(options: {
        properties: ("openFile" | "multiSelections")[];
        filters: { name: string; extensions: string[] }[];
      }): Promise<string[]>;
    };
  }
}
