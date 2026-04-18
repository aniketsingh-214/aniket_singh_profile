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
