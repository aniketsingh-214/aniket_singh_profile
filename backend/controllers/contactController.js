/**
 * contactController.js
 * Handles the contact form submission, sends:
 *  1. An admin notification email to Aniket's inbox.
 *  2. A user acknowledgement email to the form submitter.
 */

import transporter from "../config/mailer.js";
import { adminNotificationTemplate } from "../templates/adminNotificationTemplate.js";
import { userAcknowledgeTemplate } from "../templates/userAcknowledgeTemplate.js";
import logger from "../utils/logger.js";

export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  logger.info(`New contact form submission attempt from: ${name} (${email})`);

  // --- Validate required fields ---
  const missing = [];
  if (!name?.trim()) missing.push("name");
  if (!email?.trim()) missing.push("email");
  if (!subject?.trim()) missing.push("subject");
  if (!message?.trim()) missing.push("message");

  if (missing.length > 0) {
    logger.warn(`Validation failed: missing fields [${missing.join(", ")}] for ${email}`);
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(", ")}`,
    });
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    logger.warn(`Validation failed: invalid email format [${email}]`);
    return res.status(400).json({
      success: false,
      message: "Invalid email address.",
    });
  }

  const senderName = process.env.SENDER_NAME || "Aniket Singh Portfolio";
  const fromAddress = `"${senderName}" <${process.env.EMAIL_USER}>`;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

  try {
    // 1️⃣  Admin notification → to Aniket's inbox
    const adminTemplate = adminNotificationTemplate({ name, email, subject, message });
    logger.debug(`Sending admin notification for: ${subject}`);
    await transporter.sendMail({
      from: fromAddress,
      to: receiverEmail,
      replyTo: email,          // clicking "reply" in inbox goes to the user
      subject: adminTemplate.subject,
      html: adminTemplate.html,
    });

    // 2️⃣  User acknowledgement → to the form submitter
    const userTemplate = userAcknowledgeTemplate({ name, subject });
    logger.debug(`Sending user acknowledgement to: ${email}`);
    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: userTemplate.subject,
      html: userTemplate.html,
    });

    logger.info(`Successfully processed contact form for: ${name} (${email})`);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully! Check your inbox for a confirmation.",
    });
  } catch (error) {
    logger.error(`❌ Failed to process contact form for ${email}: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later or contact directly via email.",
    });
  }
};
