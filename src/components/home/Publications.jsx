import { publications, publicationsCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function Publications() {
  const tr = useTranslate();
  return (
    <section id="publications" className="section soft">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{tr(publicationsCopy.eyebrow)}</p>
          <h2>{tr(publicationsCopy.heading)}</h2>
        </div>
        <div className="cards three">
          {publications.map((pub) => (
            <article className="card" key={pub.title.en}>
              <h3>{tr(pub.title)}</h3>
              <p>{tr(pub.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
