import { learnPathways } from "../../data/content";

export default function LearnIslam() {
  return (
    <section id="learn" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Start Here</p>
          <h2>Learn Islam with clarity, wisdom, and evidence.</h2>
          <p>
            Whether you are exploring Islam for the first time, strengthening your faith, or
            preparing for Dawah, IRPC guides you step by step.
          </p>
        </div>
        <div className="cards three">
          {learnPathways.map((item) => (
            <article className="card" key={item.title}>
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href="#learn">{item.cta} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
