import { publications } from "../../data/content";

export default function Publications() {
  return (
    <section id="publications" className="section soft">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Publications</p>
          <h2>Authentic knowledge, written down.</h2>
        </div>
        <div className="cards three">
          {publications.map((pub) => (
            <article className="card" key={pub.title}>
              <h3>{pub.title}</h3>
              <p>{pub.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
