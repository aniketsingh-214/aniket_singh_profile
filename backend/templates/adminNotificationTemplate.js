/**
 * adminNotificationTemplate.js
 * HTML email sent to Aniket (admin) when a user submits the contact form.
 * Updated with a high-end "Dashboard Notification" design.
 */

export const adminNotificationTemplate = ({ name, email, subject, message }) => {
  const date = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return {
    subject: `🚀 New Lead: ${name} — ${subject}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #334155;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .header {
      background: #1e293b;
      padding: 40px;
      color: #ffffff;
    }

    .content {
      padding: 40px;
    }

    .field {
      margin-bottom: 24px;
    }

    .label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 8px;
    }

    .value {
      font-size: 16px;
      font-weight: 500;
      color: #0f172a;
    }

    .message-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px;
      margin-top: 8px;
      font-size: 15px;
      line-height: 1.6;
      color: #334155;
    }

    .button {
      display: inline-block;
      background: #4f46e5;
      color: #ffffff;
      padding: 14px 28px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 32px;
    }

    @media (max-width: 600px) {
      .container { margin: 20px; }
      .header, .content { padding: 30px 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; font-size: 14px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em;">Portfolio Notification</h2>
      <h1 style="margin: 8px 0 0; font-size: 24px; font-weight: 700;">New Inquiry Received</h1>
      <p style="margin: 12px 0 0; font-size: 14px; color: #94a3b8;">${date}</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">From</div>
        <div class="value">${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</div>
      </div>

      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${escapeHtml(subject)}</div>
      </div>

      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">
          ${escapeHtml(message).replace(/\n/g, '<br>')}
        </div>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${escapeHtml(email)}" class="button">Reply to ${escapeHtml(name)}</a>
      </div>
    </div>
  </div>
</body>
</html>`,
  };
};

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
