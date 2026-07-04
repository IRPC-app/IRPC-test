import { useState } from "react";
import { quickQuestions, heroCopy, heroStats } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function Hero() {
  const tr = useTranslate();
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
          <p className="eyebrow">{tr(heroCopy.eyebrow)}</p>
          <h1>{tr(heroCopy.headline)}</h1>
          <p className="subhead">{tr(heroCopy.subhead)}</p>
          <form className="ask-card" onSubmit={handleAsk}>
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder={tr(heroCopy.placeholder)}
              aria-label={tr(heroCopy.placeholder)}
            />
            <button type="submit">{tr(heroCopy.askButton)}</button>
          </form>
          <div className="quick-questions">
            {quickQuestions.map((q) => (
              <button type="button" key={q.en} onClick={() => setQuestion(tr(q))}>
                {tr(q)}
              </button>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#ai-daee">{tr(heroCopy.startAsking)}</a>
            <a className="btn btn-secondary" href="#learn">{tr(heroCopy.learnAbout)}</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="arabic">ٱدْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلْحِكْمَةِ</div>
          <h3>{heroCopy.panelTitle}</h3>
          <p>{tr(heroCopy.panelBody)}</p>
          <div className="mini-stat">
            <strong>{heroStats.value}</strong>
            <span>{tr(heroStats.label)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
