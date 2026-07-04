import { programs, programsCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function Programs() {
  const tr = useTranslate();
  return (
    <section id="programs" className="section soft">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{tr(programsCopy.eyebrow)}</p>
          <h2>{tr(programsCopy.heading)}</h2>
          <p>{tr(programsCopy.body)}</p>
        </div>
        <div className="cards three">
          {programs.map((program) => (
            <article className="card" key={program.title.en}>
              <h3>{tr(program.title)}</h3>
              <p>{tr(program.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
