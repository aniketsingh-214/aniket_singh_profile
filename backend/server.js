/**
 * server.js
 * Entry point for the Aniket Singh Portfolio backend API.
 * Express + Nodemailer contact form handler.
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// CORS — allow only the configured frontend origin
const allowedOrigins = [
  process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  // Add production URL when deployed, e.g.:
  // "https://aniketsingh.github.io"
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like Postman / curl) in development
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked for origin: ${origin}`));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ── Routes ────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Aniket Singh Portfolio API",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`   ➜ Health check: http://localhost:${PORT}/api/health`);
  console.log(`   ➜ Contact API:  http://localhost:${PORT}/api/contact\n`);
});
