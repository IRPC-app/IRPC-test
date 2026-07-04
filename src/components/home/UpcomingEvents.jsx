import { upcomingEvents, eventsCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function UpcomingEvents() {
  const tr = useTranslate();
  return (
    <section id="events" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{tr(eventsCopy.eyebrow)}</p>
          <h2>{tr(eventsCopy.heading)}</h2>
        </div>
        <div className="cards three">
          {upcomingEvents.map((event) => (
            <article className="card event-card" key={event.title.en}>
              <span className="event-date">{event.date}</span>
              <span className="badge">{tr(event.type)}</span>
              <h3>{tr(event.title)}</h3>
              <p>{tr(event.location)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
