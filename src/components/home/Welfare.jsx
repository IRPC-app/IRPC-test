import { welfareProjects } from "../../data/content";

export default function Welfare() {
  return (
    <section id="welfare" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Welfare</p>
          <h2>Serving humanity alongside Dawah.</h2>
          <p>IRPC's welfare arm supports underserved communities regardless of faith.</p>
        </div>
        <div className="cards four">
          {welfareProjects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
