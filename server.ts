import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { getSkodaAIAnswer } from "./api/_lib/ai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Handler for the Škoda / Volkswagen / Audi AI Advisor
  const handleSkodaAIQuery = async (req: express.Request, res: express.Response) => {
    const { question, model, variant, engine, brand } = req.body;
    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "A valid question is required." });
      return;
    }
    const answer = await getSkodaAIAnswer({ question, model, variant, engine, brand });
    res.json({ answer });
  };

  // Provide both routes for full backwards compatibility
  app.post("/api/ask-skoda-ai", handleSkodaAIQuery);
  app.post("/api/ask-slavia-ai", handleSkodaAIQuery);
  app.post("/api/ask-vw-ai", handleSkodaAIQuery);
  app.post("/api/ask-brand-ai", handleSkodaAIQuery);

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0" },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
