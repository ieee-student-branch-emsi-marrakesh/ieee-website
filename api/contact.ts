import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { buildContactEmail } from './contact-template.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured. Please check environment variables.' });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    if (!name || !email || !message || !recaptchaToken) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify reCAPTCHA token
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error('RECAPTCHA_SECRET_KEY is not configured');
      return res.status(500).json({ error: 'reCAPTCHA is not configured.' });
    }

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
    }

    const data = await resend.emails.send({
      from: 'IEEE Contact <onboarding@resend.dev>',
      to: ['studentbranchiee@gmail.com'],
      replyTo: email,
      subject: `📧 New Contact Message — ${name}`,
      html: buildContactEmail({
        name,
        email,
        message,
      }),
    });

    if (data.error) {
      console.error('Resend API error:', data.error);
      return res.status(400).json({ error: data.error.message || 'Failed to send email' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Unexpected error in contact handler:', error);
    return res.status(500).json({ error: 'Internal server error while sending email' });
  }
}
