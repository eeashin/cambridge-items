import { readStore } from "../storage/store.js";

//i. Get all items
export async function getAllItems() {
  const store = await readStore();
  return store.items;
}