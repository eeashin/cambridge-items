import express from "express";
import { decrementStock } from "../services/updateServices.js";

const router = express.Router();

// PATCH /items/:id/decrement
router.patch("/:id/decrement", async (req, res) => {
  const updated = await decrementStock(req.params.id, req.body?.amount);
  res.json(updated);
});

export default router;
