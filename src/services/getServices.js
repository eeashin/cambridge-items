import { readStore } from "../storage/store.js";
import { 
  findItemById,
  getMaxStockItem
 } from "./helpers.js";


//i. Get all items
export async function getAllItems() {
  const store = await readStore();
  return store.items;
}

// ii. Get item by id
export async function getItemById(id) {
  const store = await readStore();
  const item = findItemById(store.items, id);
  if (!item) {
    const error = new Error("item not found");
    error.status = 404;
    throw error;
  }
  return item;
}

//iii. Get item with maximum stock value
export async function getItemWithMaxStock() {
  const store = await readStore();
  return getMaxStockItem(store.items);
}
