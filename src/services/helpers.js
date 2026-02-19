export function findItemById(items, id) {
  const idStr = String(id);

  return items.find(
    (item) => String(item.id) === idStr
  );
}

export function getMaxStockItem(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  let maxItem = items[0];

  for (let i = 1; i < items.length; i++) {
    const currentQty = Number(items[i].quantity ?? 0);
    const maxQty = Number(maxItem.quantity ?? 0);

    if (currentQty > maxQty) {
      maxItem = items[i];
    }
  }

  return maxItem;
}
