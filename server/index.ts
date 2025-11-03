import "dotenv/config";
import express from "express";
import cors from "cors";
import type { Request, Response, NextFunction } from "express";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Only handle API routes - mount them under /api prefix
  const apiRouter = express.Router();
  
  apiRouter.get("/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  apiRouter.get("/demo", handleDemo);

  // Mount API router
  app.use("/api", apiRouter);

  // For all other routes, pass through to Vite dev server
  // This allows React Router to handle client-side routing
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Let Vite handle all non-API routes
    next();
  });

  return app;
}
