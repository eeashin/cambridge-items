import express from "express";
import { 
    getAllItems,
    getItemById,
    getItemWithMaxStock
 } from "../services/getServices.js";

const router = express.Router();

//GET /items
router.get("/", async (_req, res) => {
  const items = await getAllItems();
  res.json(items);
});

//GET /items/max-stock
router.get("/max-stock", async (_req, res) => {
  const item = await getItemWithMaxStock();
  if (!item) return res.status(404).json({ error: "no items" });
  res.json(item);
});

//GET /items/:id
router.get("/:id", async (req, res) => {
  const item = await getItemById(req.params.id);
  res.json(item);
});

export default router;

