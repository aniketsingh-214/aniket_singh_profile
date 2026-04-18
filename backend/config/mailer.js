/**
 * mailer.js
 * Nodemailer transporter configured for Gmail SMTP.
 * Uses App Password authentication (OAuth2-safe, no plain password).
 */

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Optional: enable TLS for extra security
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Mailer connection failed:", error.message);
    console.error("   → Check EMAIL_USER and EMAIL_PASS in your .env file.");
  } else {
    console.log("✅ Mailer is ready to send emails.");
  }
});

export default transporter;
