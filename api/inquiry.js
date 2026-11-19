// Vercel Function: sends the enquiry form directly to the hotel mailbox via the hotel's own SMTP server (A1).
// Required environment variables (Vercel → Project → Settings → Environment Variables):
//   SMTP_USER, SMTP_PASS              mailbox login (e.g. haas@hotel-klima.com)
// Optional:
//   SMTP_HOST (smtp.a1.net), SMTP_PORT (587; 465 = implicit TLS)
//   INQUIRY_TO (haas@hotel-klima.com)  recipient
//   INQUIRY_FROM (SMTP_USER)           sender; must be an address of the hotel domain (SPF)
import nodemailer from 'nodemailer';

const MAX_FIELDS = 20;
const MAX_VALUE = 4000;
const MAX_TOTAL = 12000;
const MIN_FILL_MS = 3000;
const ALLOWED_ORIGIN = /^https:\/\/(www\.)?hotel-klima\.(com|at|info)$|^https:\/\/[a-z0-9-]+\.vercel\.app$|^http:\/\/localhost(:\d+)?$/;
const EMAIL = /^[^\s@<>",;]+@[^\s@<>",;]+\.[^\s@<>",;]+$/;

/** Removes line breaks and control characters so values cannot inject mail headers. */
const singleLine = (value, max) => String(value ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, max);
const text = (value) => String(value ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '').trim();

/** Validates the request body; returns { error }, { spam } or the mail content. */
export function buildInquiry(body) {
  if (!body || typeof body !== 'object') return { error: 'invalid' };
  // Honeypot field that is invisible for people; bots fill it in.
  if (body.website) return { spam: true };
  if (typeof body.elapsedMs === 'number' && body.elapsedMs < MIN_FILL_MS) return { spam: true };

  const email = singleLine(body.email, 254);
  const name = singleLine(body.name, 120);
  if (!EMAIL.test(email) || !name) return { error: 'invalid' };
  if (!Array.isArray(body.fields) || body.fields.length === 0 || body.fields.length > MAX_FIELDS) return { error: 'invalid' };

  const lines = [];
  let total = 0;
  for (const field of body.fields) {
    if (!Array.isArray(field) || field.length !== 2) return { error: 'invalid' };
    const label = singleLine(field[0], 80);
    const value = text(field[1]).slice(0, MAX_VALUE);
    if (!label || !value) continue;
    total += value.length;
    lines.push(value.includes('\n') ? `${label}:\n${value}` : `${label}: ${value}`);
  }
  if (lines.length === 0 || total > MAX_TOTAL) return { error: 'invalid' };

  const subject = singleLine(body.subject, 150) || 'Anfrage';
  const language = singleLine(body.lang, 5);
  return {
    email,
    name,
    subject: `${subject} – ${name}`,
    text: `${lines.join('\n')}\n\n—\nAnfrage über www.hotel-klima.com${language ? ` (${language})` : ''}. „Antworten“ schreibt direkt an ${email}.\n`,
  };
}

export function createTransport(env = process.env) {
  const port = Number(env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: env.SMTP_HOST || 'smtp.a1.net',
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

export async function sendInquiry(inquiry, transport, env = process.env) {
  return transport.sendMail({
    from: { name: 'Website Hotel Klima', address: env.INQUIRY_FROM || env.SMTP_USER },
    to: env.INQUIRY_TO || 'haas@hotel-klima.com',
    replyTo: { name: inquiry.name, address: inquiry.email },
    subject: inquiry.subject,
    text: inquiry.text,
    headers: { 'X-Hotel-Klima-Inquiry': 'website' },
  });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGIN.test(origin)) {
    return res.status(403).json({ ok: false, error: 'origin' });
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }

  const inquiry = buildInquiry(body);
  if (inquiry.spam) return res.status(200).json({ ok: true });
  if (inquiry.error) return res.status(400).json({ ok: false, error: inquiry.error });
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Enquiry not sent: SMTP_USER / SMTP_PASS are not configured.');
    return res.status(503).json({ ok: false, error: 'not-configured' });
  }

  try {
    await sendInquiry(inquiry, createTransport());
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Enquiry could not be sent:', error?.message ?? error);
    return res.status(502).json({ ok: false, error: 'send-failed' });
  }
}
