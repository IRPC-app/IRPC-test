import { impactStrip } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function ImpactStats() {
  const tr = useTranslate();
  return (
    <section className="stats-section" aria-label="IRPC impact at a glance">
      <div className="container stats-grid">
        {impactStrip.map((stat) => (
          <div key={stat.label.en}>
            <strong>{stat.value}</strong>
            <span>{tr(stat.label)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
