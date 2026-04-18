/**
 * adminNotificationTemplate.js
 * HTML email sent to Aniket (admin) when a user submits the contact form.
 */

export const adminNotificationTemplate = ({ name, email, subject, message }) => {
  const date = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return {
    subject: `📬 New Contact: ${subject}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', Arial, sans-serif;
      background-color: #0f0f1a;
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f1a; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td align="center" style="
              background: linear-gradient(135deg, #6c11d3 0%, #9b5de5 50%, #c77dff 100%);
              border-radius: 16px 16px 0 0;
              padding: 36px 32px;
            ">
              <div style="
                width: 64px; height: 64px;
                background: rgba(255,255,255,0.18);
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 14px;
              ">
                <span style="font-size: 28px;">📬</span>
      </div>
              <p style="color:#fff; font-size:22px; font-weight:700; margin-bottom:6px; letter-spacing:-0.3px;">
                New Contact Form Submission
              </p>
              <p style="color:rgba(255,255,255,0.75); font-size:13px;">
                ${date}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="
              background: #1a1a2e;
              padding: 36px 32px;
            ">
              <p style="color:#a78bfa; font-size:12px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:20px;">
                Sender Details
              </p>

              <!-- Info cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding: 0 0 12px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="
                      background: #16213e;
                      border-radius: 10px;
                      border: 1px solid #2d2d5e;
                      overflow: hidden;
                    ">
                      <tr>
                        <td style="width:6px; background: linear-gradient(180deg, #9b5de5, #c77dff);"></td>
                        <td style="padding: 14px 18px;">
                          <p style="color:#7c7c9a; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Full Name</p>
                          <p style="color:#e2e8f0; font-size:16px; font-weight:600;">${escapeHtml(name)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="
                      background: #16213e;
                      border-radius: 10px;
                      border: 1px solid #2d2d5e;
                      overflow: hidden;
                    ">
                      <tr>
                        <td style="width:6px; background: linear-gradient(180deg, #9b5de5, #c77dff);"></td>
                        <td style="padding: 14px 18px;">
                          <p style="color:#7c7c9a; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Email Address</p>
                          <a href="mailto:${escapeHtml(email)}" style="color:#c77dff; font-size:15px; font-weight:500; text-decoration:none;">${escapeHtml(email)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="
                      background: #16213e;
                      border-radius: 10px;
                      border: 1px solid #2d2d5e;
                      overflow: hidden;
                    ">
                      <tr>
                        <td style="width:6px; background: linear-gradient(180deg, #9b5de5, #c77dff);"></td>
                        <td style="padding: 14px 18px;">
                          <p style="color:#7c7c9a; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Subject</p>
                          <p style="color:#e2e8f0; font-size:15px; font-weight:600;">${escapeHtml(subject)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="color:#a78bfa; font-size:12px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:14px;">
                Message
              </p>
              <div style="
                background: #16213e;
                border: 1px solid #2d2d5e;
                border-left: 4px solid #9b5de5;
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 30px;
              ">
                <p style="color:#cbd5e1; font-size:15px; line-height:1.8; white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=Re: ${encodeURIComponent(subject)}"
                      style="
                        display: inline-block;
                        background: linear-gradient(135deg, #6c11d3, #9b5de5);
                        color: #fff;
                        font-size: 15px;
                        font-weight: 600;
                        text-decoration: none;
                        padding: 14px 36px;
                        border-radius: 8px;
                        letter-spacing: 0.3px;
                      ">
                      ↩ Reply to ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              background: #13131f;
              border-radius: 0 0 16px 16px;
              padding: 22px 32px;
              text-align: center;
              border-top: 1px solid #2d2d5e;
            ">
              <p style="color:#5a5a7a; font-size:12px; line-height:1.8;">
                This is an automated notification from your portfolio contact form.<br/>
                <strong style="color:#7c7c9a;">Aniket Singh Portfolio</strong> · Powered by Nodemailer
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
};

// Helper to prevent XSS in email content
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
