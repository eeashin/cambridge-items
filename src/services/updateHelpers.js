export function validateAmount(amount) {
  const value = Number(amount);
  if (!Number.isInteger(value) || value <= 0) {
    const err = new Error("amount must be a positive integer");
    err.status = 400;
    throw err;
  }
  return value;
}

export function itemExists(item) {
  if (!item) {
    const err = new Error("item not found");
    err.status = 404;
    throw err;
  }
  return item;
}

export function enoughStock(currentQty, amount) {
  if (currentQty < amount) {
    const err = new Error("insufficient stock");
    err.status = 400;
    throw err;
  }
}
