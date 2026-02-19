const ITEMS_FILE = new URL("../../items.json", import.meta.url);

export async function readStore() {
  const text = await Bun.file(ITEMS_FILE).text();
  const store = JSON.parse(text);

  if (!store || typeof store !== "object" || !Array.isArray(store.items)) {
    throw new Error('items.json must have format: { "items": [...] }');
  }

  return store;
}
