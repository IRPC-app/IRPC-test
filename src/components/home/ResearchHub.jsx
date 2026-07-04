import { researchTopics } from "../../data/content";

export default function ResearchHub() {
  return (
    <section id="research" className="section">
      <div className="container split reverse">
        <div className="feature-box">
          <h3>Research Hub</h3>
          <p>{researchTopics.join(" • ")}</p>
        </div>
        <div>
          <p className="eyebrow">Research & Thought Leadership</p>
          <h2>Presenting Islam intellectually.</h2>
          <p>
            IRPC's research section should become India's trusted destination for authentic
            Islamic knowledge, comparative religion, and evidence-based responses to
            misconceptions.
          </p>
          <a className="btn btn-secondary" href="#research">Explore Research</a>
        </div>
      </div>
    </section>
  );
}
