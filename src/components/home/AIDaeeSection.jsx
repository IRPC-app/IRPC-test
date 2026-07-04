import { aiFeatures, aiChatDemo } from "../../data/content";

export default function AIDaeeSection() {
  return (
    <section id="ai-daee" className="section dark">
      <div className="container split">
        <div>
          <p className="eyebrow">Moonshot Vision</p>
          <h2>Build the world's most advanced AI Da'ee.</h2>
          <p>
            Not just a chatbot — a 24/7 digital ambassador for Islam that answers with wisdom,
            references, multilingual support, and scholar escalation.
          </p>
          <ul className="checklist">
            {aiFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="ai-window">
          <div className="chat-row user">{aiChatDemo.question}</div>
          <div className="chat-row ai">{aiChatDemo.answer}</div>
          <div className="chat-input">Ask follow-up question...</div>
        </div>
      </div>
    </section>
  );
}
