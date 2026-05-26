import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  state?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmail({
  name,
  email,
  state,
  message,
}: Required<Body>) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeState = escapeHtml(state);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  const text = `New AgroGrow Inquiry

Name : ${name}
Email: ${email}
State: ${state}

Message:
${message}

— Sent from AgroGrow website`;

  const html = `
  <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background:#f4faf6;font-family:'Segoe UI',Arial,sans-serif;color:#0b1a0f;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid rgba(45,106,79,0.18);">
            <tr>
              <td style="background:linear-gradient(135deg,#2d6a4f,#40916c);padding:28px 32px;color:#ffffff;">
                <div style="font-size:22px;font-weight:700;letter-spacing:0.3px;">🌱 AgroGrow</div>
                <div style="font-size:13px;opacity:0.9;margin-top:4px;">New inquiry from your website</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0 0 18px;font-size:14px;color:#374151;line-height:1.6;">
                  You have received a new contact form submission. Details below:
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 8px;">
                  <tr>
                    <td style="background:#f4faf6;border:1px solid rgba(45,106,79,0.15);border-radius:10px;padding:14px 18px;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#40916c;font-weight:600;">Name</div>
                      <div style="font-size:15px;color:#0b1a0f;margin-top:4px;font-weight:600;">${safeName}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#f4faf6;border:1px solid rgba(45,106,79,0.15);border-radius:10px;padding:14px 18px;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#40916c;font-weight:600;">Email</div>
                      <div style="font-size:15px;color:#0b1a0f;margin-top:4px;font-weight:600;">
                        <a href="mailto:${safeEmail}" style="color:#d97706;text-decoration:none;">${safeEmail}</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#f4faf6;border:1px solid rgba(45,106,79,0.15);border-radius:10px;padding:14px 18px;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#40916c;font-weight:600;">State</div>
                      <div style="font-size:15px;color:#0b1a0f;margin-top:4px;font-weight:600;">${safeState}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px;">
                <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#40916c;font-weight:600;margin-bottom:8px;">Message</div>
                <div style="background:#fffaf0;border-left:4px solid #f59e0b;padding:16px 18px;border-radius:6px;font-size:14px;color:#0b1a0f;line-height:1.7;">
                  ${safeMessage}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;">
                <a href="mailto:${safeEmail}?subject=Re:%20Your%20AgroGrow%20Inquiry" style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#d97706);color:#0b1a0f;text-decoration:none;font-weight:600;font-size:14px;padding:12px 24px;border-radius:999px;">
                  ↩ Reply to ${safeName}
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:#f4faf6;padding:18px 32px;text-align:center;font-size:12px;color:#6b7280;border-top:1px solid rgba(45,106,79,0.12);">
                Sent automatically from the AgroGrow website contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;

  return { text, html };
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return badRequest("Invalid JSON body.");
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const state = body.state?.trim();
  const message = body.message?.trim();

  if (!name || !email || !state || !message) {
    return badRequest("All fields are required.");
  }
  if (name.length > 100) return badRequest("Name is too long.");
  if (email.length > 200 || !EMAIL_REGEX.test(email))
    return badRequest("Please enter a valid email address.");
  if (state.length > 100) return badRequest("State is too long.");
  if (message.length > 5000) return badRequest("Message is too long.");

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_PASS in environment.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const { text, html } = buildEmail({ name, email, state, message });

  try {
    await transporter.sendMail({
      from: `"AgroGrow Website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New AgroGrow Inquiry from ${name}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("nodemailer error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send the message. Please try again later." },
      { status: 502 }
    );
  }
}
