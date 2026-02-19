import { readStore, writeStore } from "../storage/store.js";
import {findItemById} from "./getHelpers.js";
import {
    validateAmount,
    itemExists,
    enoughStock
} from "./updateHelpers.js";

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