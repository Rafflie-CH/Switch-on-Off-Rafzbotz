import { REPLIT_URL } from "./_config.js"

export default async function handler(req, res) {
  try {
    const r = await fetch(`${REPLIT_URL}/status`)
    const j = await r.json()
    res.json(j)
  } catch {
    res.json({ status: "OFF" })
  }
}
