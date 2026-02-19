import express from "express";
import { getAllItems } from "../services/getServices.js";

const router = express.Router();

// GET /items
router.get("/", async (_req, res) => {
  const items = await getAllItems();
  res.json(items);
});

export default router;

