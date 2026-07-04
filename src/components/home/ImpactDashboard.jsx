import { impactDashboard } from "../../data/content";

export default function ImpactDashboard() {
  return (
    <section id="impact" className="section soft">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Impact</p>
          <h2>13+ years of authentic Dawah, in numbers.</h2>
        </div>
        <div className="cards dashboard-grid">
          {impactDashboard.map((stat) => (
            <div className="dashboard-tile" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
