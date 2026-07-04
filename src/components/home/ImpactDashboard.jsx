import { impactDashboard, dashboardCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function ImpactDashboard() {
  const tr = useTranslate();
  return (
    <section id="impact" className="section soft">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{tr(dashboardCopy.eyebrow)}</p>
          <h2>{tr(dashboardCopy.heading)}</h2>
        </div>
        <div className="cards dashboard-grid">
          {impactDashboard.map((stat) => (
            <div className="dashboard-tile" key={stat.label.en}>
              <strong>{stat.value}</strong>
              <span>{tr(stat.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
