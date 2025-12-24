import { REPLIT_URL } from "./_config.js"

export default async function handler(req, res) {
  const r = await fetch(`${REPLIT_URL}/stop`)
  const j = await r.json()
  res.json(j)
}
