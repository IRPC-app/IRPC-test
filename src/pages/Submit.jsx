import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = ["Quran", "Hadith", "Dawah"];

export default function Submit() {
  const [form, setForm] = useState({ text: "", source: "", category: "Dawah" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.text.trim()) {
      setError("Please enter a message.");
      return;
    }
    if (!form.source.trim()) {
      setError("Please enter the source.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("submittedMessages") || "[]");
    const newMessage = {
      id: Date.now(),
      text: form.text.trim(),
      source: form.source.trim(),
      category: form.category,
    };
    localStorage.setItem(
      "submittedMessages",
      JSON.stringify([...existing, newMessage])
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="page page--center">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>JazakAllah Khair!</h2>
          <p>Your message has been added to the collection.</p>
          <div className="success-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                setForm({ text: "", source: "", category: "Dawah" });
                setSubmitted(false);
              }}
            >
              Submit Another
            </button>
            <Link to="/browse" className="btn btn-outline">Browse Messages</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <h1 className="page-title">Submit a Message</h1>
      <p className="page-sub">
        Share a Quran verse, Hadith, or Dawah reminder to grow the collection.
      </p>

      <form className="submit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="text">
            Message *
          </label>
          <textarea
            id="text"
            name="text"
            className="form-textarea"
            rows={5}
            placeholder="Enter the message or verse..."
            value={form.text}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="source">
            Source *
          </label>
          <input
            id="source"
            name="source"
            type="text"
            className="form-input"
            placeholder="e.g. Quran 2:255 or Sahih al-Bukhari 13"
            value={form.source}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <div className="radio-group">
            {CATEGORIES.map((cat) => (
              <label key={cat} className="radio-label">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={form.category === cat}
                  onChange={handleChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn btn-primary btn--full">
          Submit Message
        </button>
      </form>
    </main>
  );
}
