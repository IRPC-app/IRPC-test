import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { messages as defaultMessages } from "../data/messages";
import MessageCard from "../components/MessageCard";

function getDailyMessage(allMessages) {
  const dayIndex = Math.floor(Date.now() / 86400000);
  return allMessages[dayIndex % allMessages.length];
}

export default function Home() {
  const [allMessages, setAllMessages] = useState([]);
  const [daily, setDaily] = useState(null);
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const submitted = JSON.parse(localStorage.getItem("submittedMessages") || "[]");
    const combined = [...defaultMessages, ...submitted];
    setAllMessages(combined);
    setDaily(getDailyMessage(combined));
    setRandom(null);
  }, []);

  const handleRandom = () => {
    const pick = allMessages[Math.floor(Math.random() * allMessages.length)];
    setRandom(pick);
  };

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">Spread the Message of Islam</h1>
        <p className="hero-sub">
          Discover, share, and contribute Dawah messages from the Quran, Hadith,
          and Islamic reminders.
        </p>
        <div className="hero-actions">
          <Link to="/browse" className="btn btn-primary">Browse All Messages</Link>
          <Link to="/submit" className="btn btn-outline">Submit a Message</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Message of the Day</h2>
        {daily && <MessageCard message={daily} featured />}
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Random Message</h2>
          <button className="btn btn-outline" onClick={handleRandom}>
            ↻ Get Another
          </button>
        </div>
        {random ? (
          <MessageCard message={random} />
        ) : (
          <div className="empty-state">
            <p>Click "Get Another" to discover a random Dawah message.</p>
          </div>
        )}
      </section>
    </main>
  );
}
