import express from "express";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // health check
  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  // 404 handler
  app.use((_req, res) => {
    res.status(404).json({ error: "not found" });
  });

  return app;
}
