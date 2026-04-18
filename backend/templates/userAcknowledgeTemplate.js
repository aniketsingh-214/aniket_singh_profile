/**
 * userAcknowledgeTemplate.js
 * HTML "Thank You" / Acknowledgement email sent to the user after they submit the contact form.
 * Updated to a "Minimalist Premium" design for maximum clarity and visual appeal.
 */

export const userAcknowledgeTemplate = ({ name, subject }) => {
  const year = new Date().getFullYear();

  return {
    subject: `Message Received ✅ — Aniket Singh`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acknowledgment</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: 'Plus Jakarta Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #1e293b;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .header {
      background: #4f46e5;
      padding: 60px 40px;
      text-align: center;
      color: #ffffff;
    }

    .body {
      padding: 48px 40px;
    }

    .footer {
      background: #f1f5f9;
      padding: 40px;
      text-align: center;
      color: #64748b;
      font-size: 14px;
    }

    .card {
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
    }

    .button {
      display: inline-block;
      background: #4f46e5;
      color: #ffffff;
      padding: 16px 32px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 32px;
    }

    @media (max-width: 600px) {
      .container { margin: 20px; }
      .header, .body, .footer { padding: 30px 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="font-size: 48px; margin-bottom: 16px;">👋</div>
      <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -1px;">We've got it!</h1>
      <p style="margin: 8px 0 0; opacity: 0.8; font-size: 16px;">Thanks for reaching out, ${escapeHtml(name)}.</p>
    </div>
    
    <div class="body">
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
        Hi ${escapeHtml(name)},<br><br>
        I've successfully received your message regarding <strong>"${escapeHtml(subject)}"</strong>. I personally look through every inquiry and will get back to you within 24-48 hours.
      </p>

      <div class="card">
        <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 700; text-transform: uppercase; color: #6366f1; letter-spacing: 0.1em;">Next Steps</h3>
        <table width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding-bottom: 12px; font-size: 15px; font-weight: 600; color: #1e293b;">1. Review & Analyze</td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px; font-size: 14px; color: #64748b; line-height: 1.5;">I'll go through your requirements and prepare a detailed response.</td>
          </tr>
          <tr>
            <td style="padding-bottom: 12px; font-size: 15px; font-weight: 600; color: #1e293b;">2. Direct Response</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #64748b; line-height: 1.5;">Expect to hear from me via email shortly to discuss how we can work together.</td>
          </tr>
        </table>
      </div>

      <div style="text-align: center;">
        <a href="https://aniketsingh214.github.io/aniket_singh_profile/" class="button">Visit My Portfolio</a>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0 0 16px;">Connect with me</p>
      <div style="margin-bottom: 24px;">
        <a href="https://www.linkedin.com/in/aniketsingh214/" style="color: #4f46e5; text-decoration: none; margin: 0 12px; font-weight: 600;">LinkedIn</a>
        <a href="https://github.com/aniketsingh-214/" style="color: #4f46e5; text-decoration: none; margin: 0 12px; font-weight: 600;">GitHub</a>
      </div>
      <p style="font-size: 12px; opacity: 0.6;">&copy; ${year} Aniket Singh. All rights reserved.</p>
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
