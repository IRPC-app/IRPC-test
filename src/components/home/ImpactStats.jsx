import { impactStrip } from "../../data/content";

export default function ImpactStats() {
  return (
    <section className="stats-section" aria-label="IRPC impact at a glance">
      <div className="container stats-grid">
        {impactStrip.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
