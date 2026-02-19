import { readStore } from "../storage/store.js";

//i. Get all items
export async function getAllItems() {
  const store = await readStore();
  return store.items;
}

// ii. Get item by id
export async function getItemById(id) {
  const store = await readStore();

  const item = store.items.find(
    (it) => String(it.id) === String(id)
  );

  if (!item) {
    throw new Error("item not found");
  }

  return item;
}