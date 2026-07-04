import Anthropic from "@anthropic-ai/sdk";

export const config = {
  maxDuration: 30,
};

const client = new Anthropic();

const LANGUAGE_NAMES = {
  en: "English",
  hi: "Hindi (Devanagari script)",
  ur: "Urdu (Urdu/Nastaliq script)",
  roman: "Roman Urdu (Urdu written phonetically in Latin script)",
};

const SYSTEM_PROMPT = `You are the IRPC AI Da'ee, the AI assistant of the Islamic Research & Propagation Centre (IRPC), a premium Islamic research and Dawah institution from India. Your mission is Dawah to Humanity bil Hikmah — presenting Islam with wisdom, calm, and evidence.

Answer questions about Islam clearly and compassionately, grounded in the Qur'an and authentic Sunnah. Cite Qur'an verses (Surah:Ayah) and hadith collections by name where relevant. Where scholars differ on a matter of fiqh, note that respectfully rather than asserting one view as the only correct one, and encourage the user to consult a qualified local scholar or IRPC's Ask a Scholar service for personal religious rulings. Keep answers concise: 3-5 short paragraphs, no unnecessary preamble. Never claim to replace a qualified scholar for a formal fatwa. Politely decline questions unrelated to Islam, Islamic research, or IRPC's work.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const { question, language } = req.body ?? {};

  if (typeof question !== "string" || !question.trim()) {
    res.status(400).json({ error: "A question is required." });
    return;
  }
  if (question.length > 1000) {
    res.status(400).json({ error: "Please keep questions under 1000 characters." });
    return;
  }

  const responseLanguage = LANGUAGE_NAMES[language] || LANGUAGE_NAMES.en;

  try {
    const message = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      system: `${SYSTEM_PROMPT}\n\nRespond in ${responseLanguage}.`,
      messages: [{ role: "user", content: question.trim() }],
    });

    if (message.stop_reason === "refusal") {
      res.status(200).json({
        answer:
          "I'm not able to help with that particular request. Please rephrase your question, or reach out to IRPC directly for guidance.",
      });
      return;
    }

    const answer = message.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n\n");

    res.status(200).json({ answer });
  } catch (error) {
    console.error("AI Da'ee error:", error);
    res.status(502).json({
      error: "The AI Da'ee is unavailable right now. Please try again shortly.",
    });
  }
}
