import { useState, useEffect } from "react";
import { messages as defaultMessages } from "../data/messages";
import MessageCard from "../components/MessageCard";

const CATEGORIES = ["All", "Quran", "Hadith", "Dawah"];

export default function Browse() {
  const [allMessages, setAllMessages] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const submitted = JSON.parse(localStorage.getItem("submittedMessages") || "[]");
    setAllMessages([...defaultMessages, ...submitted]);
  }, []);

  const visible = allMessages.filter((m) => {
    const matchCat = filter === "All" || m.category === filter;
    const matchSearch =
      search === "" ||
      m.text.toLowerCase().includes(search.toLowerCase()) ||
      m.source.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="page">
      <h1 className="page-title">Browse Messages</h1>

      <div className="filters">
        <input
          className="search-input"
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="category-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill ${filter === cat ? "pill--active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="result-count">{visible.length} message{visible.length !== 1 ? "s" : ""}</p>

      <div className="message-grid">
        {visible.map((m) => (
          <MessageCard key={m.id} message={m} />
        ))}
        {visible.length === 0 && (
          <p className="no-results">No messages found. Try a different search or filter.</p>
        )}
      </div>
    </main>
  );
}
