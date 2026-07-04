import { programs } from "../../data/content";

export default function Programs() {
  return (
    <section id="programs" className="section soft">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Programs</p>
          <h2>From learning to action.</h2>
          <p>IRPC trains, educates, serves, and inspires through structured programs.</p>
        </div>
        <div className="cards three">
          {programs.map((program) => (
            <article className="card" key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
