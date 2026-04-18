/**
 * userAcknowledgeTemplate.js
 * HTML "Thank You" / Acknowledgement email sent to the user after they submit the contact form.
 * "Minimalist Premium" design — professional business tone.
 */

export const userAcknowledgeTemplate = ({ name, subject }) => {
  const year = new Date().getFullYear();

  return {
    subject: `Your Inquiry Has Been Received — Aniket Singh`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Acknowledgement</title>
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
      padding: 56px 40px 48px;
      text-align: center;
      color: #ffffff;
    }

    .header-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 100px;
      padding: 6px 18px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .body {
      padding: 48px 40px;
    }

    .footer {
      background: #f1f5f9;
      padding: 36px 40px;
      text-align: center;
      color: #64748b;
      font-size: 14px;
      border-top: 1px solid #e2e8f0;
    }

    .divider {
      border: none;
      border-top: 1px solid #e2e8f0;
      margin: 32px 0;
    }

    .card {
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 28px;
      margin-bottom: 24px;
      background: #fafbff;
    }

    .step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: #eef2ff;
      color: #4f46e5;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .subject-pill {
      display: inline-block;
      background: #eef2ff;
      color: #4f46e5;
      border-radius: 8px;
      padding: 4px 12px;
      font-size: 14px;
      font-weight: 600;
      word-break: break-word;
    }

    .button {
      display: inline-block;
      background: #4f46e5;
      color: #ffffff !important;
      padding: 15px 32px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: 0.01em;
    }

    .meta-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 16px;
    }

    @media (max-width: 600px) {
      .container { margin: 16px; border-radius: 16px; }
      .header, .body, .footer { padding: 32px 24px; }
    }
  </style>
</head>
<body>
  <div class="container">

    <!-- HEADER -->
    <div class="header">
      <div class="header-badge">Inquiry Confirmed</div>
      <h1 style="margin: 0 0 10px; font-size: 30px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.2;">
        Thank You for Reaching Out
      </h1>
      <p style="margin: 0; opacity: 0.82; font-size: 16px; line-height: 1.5;">
        Your message has been received and is under review.
      </p>
    </div>

    <!-- BODY -->
    <div class="body">

      <p style="font-size: 16px; line-height: 1.7; color: #374151; margin: 0 0 8px;">
        Dear ${escapeHtml(name)},
      </p>
      <p style="font-size: 15px; line-height: 1.8; color: #475569; margin: 0 0 28px;">
        Thank you for getting in touch. I have successfully received your inquiry and want to assure you that it will be given my full and prompt attention. I strive to respond to all correspondence within <strong style="color: #1e293b;">24–48 business hours</strong>.
      </p>

      <!-- Subject summary -->
      <div class="card">
        <p style="margin: 0 0 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">
          Inquiry Summary
        </p>
        <table width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding-bottom: 10px; font-size: 13px; color: #64748b; width: 90px; vertical-align: top; padding-top: 2px;">Subject</td>
            <td style="padding-bottom: 10px;">
              <span class="subject-pill">${escapeHtml(subject)}</span>
            </td>
          </tr>
          <tr>
            <td style="font-size: 13px; color: #64748b; vertical-align: top; padding-top: 2px;">Status</td>
            <td>
              <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#16a34a;">
                <span style="width:8px;height:8px;background:#22c55e;border-radius:50%;display:inline-block;"></span>
                Received &amp; Pending Review
              </span>
            </td>
          </tr>
        </table>
      </div>

      <hr class="divider">

      <!-- Next Steps -->
      <p style="margin: 0 0 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #6366f1;">
        What Happens Next
      </p>

      <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
        <tr>
          <td style="vertical-align: top; padding-bottom: 24px;">
            <div class="meta-row">
              <span class="step-number">1</span>
              <div>
                <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #1e293b;">Review &amp; Analysis</p>
                <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.6;">Your inquiry will be carefully reviewed to understand your requirements and ensure a thorough, tailored response.</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="vertical-align: top; padding-bottom: 24px;">
            <div class="meta-row">
              <span class="step-number">2</span>
              <div>
                <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #1e293b;">Personalised Response</p>
                <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.6;">You will receive a direct reply to this email address with a detailed response and any relevant next steps we can take together.</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="vertical-align: top;">
            <div class="meta-row">
              <span class="step-number">3</span>
              <div>
                <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #1e293b;">Follow-Up &amp; Collaboration</p>
                <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.6;">Should your inquiry require further discussion, I will propose a convenient time to connect and explore how we can best work together.</p>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <hr class="divider">

      <p style="font-size: 14px; line-height: 1.8; color: #64748b; margin: 0 0 32px;">
        In the meantime, feel free to explore my portfolio to learn more about my work, expertise, and previous projects. I look forward to connecting with you soon.
      </p>

      <div style="text-align: center;">
        <a href="https://aniketsingh214.github.io/aniket_singh_profile/" class="button">View Portfolio</a>
      </div>

    </div>

    <!-- FOOTER -->
    <div class="footer">
      <p style="margin: 0 0 6px; font-size: 15px; font-weight: 600; color: #1e293b;">Aniket Singh</p>
      <p style="margin: 0 0 20px; font-size: 13px; color: #94a3b8;">Software Developer &amp; Designer</p>
      <div style="margin-bottom: 24px;">
        <a href="https://www.linkedin.com/in/aniketsingh214/" style="color: #4f46e5; text-decoration: none; margin: 0 14px; font-weight: 600; font-size: 13px;">LinkedIn</a>
        <a href="https://github.com/aniketsingh-214/" style="color: #4f46e5; text-decoration: none; margin: 0 14px; font-weight: 600; font-size: 13px;">GitHub</a>
      </div>
      <p style="font-size: 12px; color: #94a3b8; margin: 0;">
        This is an automated confirmation. Please do not reply to this message.<br>
        &copy; ${year} Aniket Singh. All rights reserved.
      </p>
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