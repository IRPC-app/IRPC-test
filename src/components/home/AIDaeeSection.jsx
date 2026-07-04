import { useEffect, useState } from "react";
import { aiFeatures, aiChatDemo, aiDaeeCopy } from "../../data/content";
import { useTranslate, useLanguage } from "../../i18n/LanguageContext";
import { useAiDaee } from "../../context/AiDaeeContext";

export default function AIDaeeSection() {
  const tr = useTranslate();
  const { language } = useLanguage();
  const { pendingQuestion, setPendingQuestion } = useAiDaee();
  const [messages, setMessages] = useState([
    { role: "user", text: tr(aiChatDemo.question) },
    { role: "ai", text: tr(aiChatDemo.answer) },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async (text) => {
    const question = text.trim();
    if (!question || loading) return;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/ask-daee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, language }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");
      setMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", error: true, text: error.message || "The AI Da'ee is unavailable right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pendingQuestion) {
      ask(pendingQuestion);
      setPendingQuestion(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuestion]);

  const handleSubmit = (event) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <section id="ai-daee" className="section dark">
      <div className="container split">
        <div>
          <p className="eyebrow">{tr(aiDaeeCopy.eyebrow)}</p>
          <h2>{tr(aiDaeeCopy.heading)}</h2>
          <p>{tr(aiDaeeCopy.body)}</p>
          <ul className="checklist">
            {aiFeatures.map((feature) => (
              <li key={feature.en}>{tr(feature)}</li>
            ))}
          </ul>
        </div>
        <div className="ai-window">
          <div className="chat-scroll">
            {messages.map((message, index) => (
              <div
                className={`chat-row ${message.role}${message.error ? " error" : ""}`}
                key={index}
              >
                {message.text}
              </div>
            ))}
            {loading && <div className="chat-row ai chat-loading">{tr(aiDaeeCopy.thinking)}</div>}
          </div>
          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={tr(aiDaeeCopy.chatInputPlaceholder)}
              disabled={loading}
              aria-label={tr(aiDaeeCopy.chatInputPlaceholder)}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              {tr(aiDaeeCopy.send)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
