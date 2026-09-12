import { getSkodaAIAnswer } from "./_lib/ai";

// Vercel Node.js serverless function — handles the AI Advisor endpoint
// used by all three brands (Škoda, Volkswagen, Audi). Kept framework-free
// (no Express) so it runs directly under Vercel's Node runtime.
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { question, model, variant, engine, brand } = req.body || {};
    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "A valid question is required." });
      return;
    }

    const answer = await getSkodaAIAnswer({ question, model, variant, engine, brand });
    res.status(200).json({ answer });
  } catch (err) {
    console.error("AI Advisor handler error:", err);
    res.status(500).json({ error: "Something went wrong generating a response." });
  }
}
