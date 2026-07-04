import { learnPathways, learnCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function LearnIslam() {
  const tr = useTranslate();
  return (
    <section id="learn" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{tr(learnCopy.eyebrow)}</p>
          <h2>{tr(learnCopy.heading)}</h2>
          <p>{tr(learnCopy.body)}</p>
        </div>
        <div className="cards three">
          {learnPathways.map((item) => (
            <article className="card" key={item.title.en}>
              <span className="icon">{item.icon}</span>
              <h3>{tr(item.title)}</h3>
              <p>{tr(item.body)}</p>
              <a href="#learn">{tr(item.cta)} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
