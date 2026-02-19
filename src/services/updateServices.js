import { readStore, writeStore } from "../storage/store.js";
import {findItemById} from "./getHelpers.js";
import {
    validateAmount,
    itemExists,
    enoughStock
} from "./updateHelpers.js";

//v. Decrement stock of item by id by x amount
export async function decrementStock(id, amount) {
  const value = validateAmount(amount);
  const store = await readStore();
  const item = itemExists(findItemById(store.items, id));
  const currentQty = Number(item.quantity ?? 0);
  if (!Number.isFinite(currentQty)) {
    const err = new Error("invalid item quantity");
    err.status = 500;
    throw err;
  }
  enoughStock(currentQty, value);
  item.quantity = currentQty - value;
  await writeStore(store);
  return item;
}

//vi. Increment stock by id
export async function incrementStock(id, amount) {
  const value = validateAmount(amount);
  const store = await readStore();
  const item = itemExists(findItemById(store.items, id));
  const currentQty = Number(item.quantity ?? 0);
  if (!Number.isFinite(currentQty)) {
    const err = new Error("invalid item quantity");
    err.status = 500;
    throw err;
  }
  item.quantity = currentQty + value;
  await writeStore(store);
  return item;
}

//vii. Increment stock of all items by x amount
export async function incrementAllStock(amount) {
  const value = validateAmount(amount);
  const store = await readStore();
  for (const item of store.items) {
    const currentQty = Number(item.quantity ?? 0);
    if (!Number.isFinite(currentQty)) {
      const err = new Error(`invalid item quantity for id ${item.id}`);
      err.status = 500;
      throw err;
    }
    item.quantity = currentQty + value;
  }
  await writeStore(store);

  return store.items;
}
