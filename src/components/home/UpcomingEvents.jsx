import { upcomingEvents } from "../../data/content";

export default function UpcomingEvents() {
  return (
    <section id="events" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Upcoming Events</p>
          <h2>Join a talk, symposium, or dialogue near you.</h2>
        </div>
        <div className="cards three">
          {upcomingEvents.map((event) => (
            <article className="card event-card" key={event.title}>
              <span className="event-date">{event.date}</span>
              <span className="badge">{event.type}</span>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
