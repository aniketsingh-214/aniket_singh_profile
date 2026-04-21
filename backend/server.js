/**
 * server.js
 * Entry point for the Aniket Singh Portfolio backend API.
 * Express + Nodemailer contact form handler.
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import logger from "./utils/logger.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(helmet()); // Security headers
app.use(compression()); // Compress responses
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// HTTP Request Logging (Morgan)
const morganFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(
  morgan(morganFormat, {
    stream: { write: (message) => logger.http(message.trim()) },
  })
);

const allowedOrigins = (process.env.FRONTEND_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like Postman / curl) in development
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        logger.warn(`CORS blocked for origin: ${origin}`);
        callback(new Error(`CORS blocked for origin: ${origin}`));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ── Routes ────────────────────────────────────────────────────
app.get("/", (_req, res) => {
  res.send(`
    <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0f172a; color: white;">
      <div style="text-align: center; border: 1px solid #334155; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <h1 style="color: #818cf8; margin-bottom: 10px;">🚀 Backend Deployment Successful</h1>
        <p style="color: #94a3b8; font-size: 1.1rem;">Aniket Singh Portfolio Backend is live and operational.</p>
        <div style="margin-top: 20px; font-size: 0.9rem; color: #64748b;">
          Service: API Handler (Nodemailer) <br/>
          Status: Active
        </div>
      </div>
    </body>
  `);
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Aniket Singh Portfolio API",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);

// 404 handler
app.use((req, res) => {
  logger.warn(`404 - Not Found: ${req.originalUrl}`);
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler
app.use((err, req, res, _next) => {
  logger.error(`Error processing ${req.method} ${req.url}: ${err.message}`);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === "production" ? "Internal server error." : err.message,
  });
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  logger.info(`Backend server running on http://localhost:${PORT}`);
  logger.info(`Health check: http://localhost:${PORT}/api/health`);
  logger.info(`Contact API:  http://localhost:${PORT}/api/contact`);
});
