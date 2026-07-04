import { useState } from "react";
import { quickQuestions, heroStats } from "../../data/content";

export default function Hero() {
  const [question, setQuestion] = useState("");

  const handleAsk = (event) => {
    event.preventDefault();
    document.getElementById("ai-daee")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Know ISLAM, Know Peace.</p>
          <h1>Ask Anything About Islam.</h1>
          <p className="subhead">
            Get calm, authentic, evidence-based answers from the Qur'an, Sunnah, and trusted
            Islamic scholarship through the IRPC AI Da'ee.
          </p>
          <form className="ask-card" onSubmit={handleAsk}>
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask any question about Islam..."
              aria-label="Ask any question about Islam"
            />
            <button type="submit">Ask AI Da'ee</button>
          </form>
          <div className="quick-questions">
            {quickQuestions.map((q) => (
              <button type="button" key={q} onClick={() => setQuestion(q)}>
                {q}
              </button>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#ai-daee">Start Asking</a>
            <a className="btn btn-secondary" href="#learn">Learn About Islam</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="arabic">ٱدْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلْحِكْمَةِ</div>
          <h3>Dawah to Humanity bil Hikmah</h3>
          <p>
            A premium Islamic research and Dawah institution from India, presenting Islam
            intellectually, compassionately, and professionally.
          </p>
          <div className="mini-stat">
            <strong>{heroStats.value}</strong>
            <span>{heroStats.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
