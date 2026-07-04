import { aiFeatures, aiChatDemo, aiDaeeCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function AIDaeeSection() {
  const tr = useTranslate();
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
          <div className="chat-row user">{tr(aiChatDemo.question)}</div>
          <div className="chat-row ai">{tr(aiChatDemo.answer)}</div>
          <div className="chat-input">{tr(aiDaeeCopy.chatInputPlaceholder)}</div>
        </div>
      </div>
    </section>
  );
}
