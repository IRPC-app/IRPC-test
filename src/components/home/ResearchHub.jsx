import { researchTopics, researchCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function ResearchHub() {
  const tr = useTranslate();
  return (
    <section id="research" className="section">
      <div className="container split reverse">
        <div className="feature-box">
          <h3>{tr(researchCopy.hubTitle)}</h3>
          <p>{researchTopics.map((topic) => tr(topic)).join(" • ")}</p>
        </div>
        <div>
          <p className="eyebrow">{tr(researchCopy.eyebrow)}</p>
          <h2>{tr(researchCopy.heading)}</h2>
          <p>{tr(researchCopy.body)}</p>
          <a className="btn btn-secondary" href="#research">{tr(researchCopy.cta)}</a>
        </div>
      </div>
    </section>
  );
}
