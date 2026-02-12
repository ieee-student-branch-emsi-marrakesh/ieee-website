interface ContactData {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildContactEmail(data: ContactData): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeMessage = escapeHtml(data.message);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f4f7; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7; padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #00629B 0%, #004471 100%); padding:32px 40px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:700; letter-spacing:0.5px;">
                ⚡ IEEE Student Branch
              </h1>
              <p style="margin:6px 0 0; color:rgba(255,255,255,0.75); font-size:13px; letter-spacing:1px; text-transform:uppercase;">
                EMSI Marrakesh — New Contact Message
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 24px; color:#333; font-size:15px; line-height:1.6;">
                A new contact message has been submitted through the website.
              </p>

              <!-- Info Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fc; border-radius:12px; border:1px solid #e8ecf1;">
                <tr>
                  <td style="padding:24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0; border-bottom:1px solid #e8ecf1;">
                          <span style="color:#8892a4; font-size:11px; text-transform:uppercase; letter-spacing:1px; font-weight:600;">Full Name</span><br/>
                          <span style="color:#1a1a2e; font-size:16px; font-weight:600;">${safeName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; border-bottom:1px solid #e8ecf1;">
                          <span style="color:#8892a4; font-size:11px; text-transform:uppercase; letter-spacing:1px; font-weight:600;">Email</span><br/>
                          <a href="mailto:${safeEmail}" style="color:#00629B; font-size:16px; font-weight:600; text-decoration:none;">${safeEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#8892a4; font-size:11px; text-transform:uppercase; letter-spacing:1px; font-weight:600;">Message</span><br/>
                          <span style="color:#1a1a2e; font-size:14px; line-height:1.6; white-space:pre-wrap;">${safeMessage}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re: Your Contact Message to IEEE S.B EMSI Marrakesh" style="display:inline-block; padding:14px 32px; background-color:#00629B; color:#ffffff; border-radius:10px; text-decoration:none; font-weight:700; font-size:14px; letter-spacing:0.5px;">
                      Reply to Contact →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8f9fc; padding:20px 40px; text-align:center; border-top:1px solid #e8ecf1;">
              <p style="margin:0; color:#8892a4; font-size:12px;">
                Sent from <strong>IEEE S.B EMSI Marrakesh</strong> website contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}