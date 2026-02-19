import express from "express";
import { 
    getAllItems,
    getItemById
 } from "../services/getServices.js";

const router = express.Router();

// GET /items
router.get("/", async (_req, res) => {
  const items = await getAllItems();
  res.json(items);
});

// ii. GET /items/:id
router.get("/:id", async (req, res) => {
  const item = await getItemById(req.params.id);
  res.json(item);
});

export default router;

