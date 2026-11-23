import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, business, email, url, industry, challenge, info } = req.body
  if (!name || !business || !email) return res.status(400).json({ error: 'Missing required fields' })
  const payload = { type: 'assessment', name, business, email, url, industry, challenge, info, receivedAt: new Date().toISOString() }
  if (process.env.RESEND_API_KEY && process.env.ASSESSMENT_TO) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({ from: process.env.RESEND_FROM || 'onboarding@resend.dev', to: process.env.ASSESSMENT_TO, subject: 'New assessment request', text: JSON.stringify(payload, null, 2) })
  }
  return res.status(200).json({ ok: true })
}