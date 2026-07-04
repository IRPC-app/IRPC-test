import { welfareProjects, welfareCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function Welfare() {
  const tr = useTranslate();
  return (
    <section id="welfare" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{tr(welfareCopy.eyebrow)}</p>
          <h2>{tr(welfareCopy.heading)}</h2>
          <p>{tr(welfareCopy.body)}</p>
        </div>
        <div className="cards four">
          {welfareProjects.map((project) => (
            <article className="card" key={project.title.en}>
              <h3>{tr(project.title)}</h3>
              <p>{tr(project.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
