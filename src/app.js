import express from "express";
import getRoutes from "./routes/getRoutes.js";

export function createApp() {
  const app = express();

  app.use(express.json());

  //health check
  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  //routes
  app.use("/items", getRoutes);

  //404 handler
  app.use((_req, res) => {
    res.status(404).json({ error: "not found" });
  });

  //error handler
  app.use((err, _req, res, _next) => {
    console.error(err);

    res.status(500).json({
      error: err?.message || "internal server error",
    });
  });

  return app;
}
