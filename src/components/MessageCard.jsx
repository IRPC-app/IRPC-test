import { useState } from "react";

export default function MessageCard({ message, featured = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `"${message.text}" — ${message.source}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`"${message.text}" — ${message.source}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleTwitter = () => {
    const text = encodeURIComponent(`"${message.text}" — ${message.source} #Dawah #Islam`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const categoryColors = {
    Quran: "badge-green",
    Hadith: "badge-blue",
    Dawah: "badge-gold",
  };

  return (
    <div className={`message-card ${featured ? "message-card--featured" : ""}`}>
      <span className={`badge ${categoryColors[message.category] || "badge-default"}`}>
        {message.category}
      </span>
      <p className="message-text">"{message.text}"</p>
      <p className="message-source">— {message.source}</p>
      <div className="share-row">
        <button className="btn btn-ghost" onClick={handleCopy}>
          {copied ? "✓ Copied!" : "⎘ Copy"}
        </button>
        <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
          WhatsApp
        </button>
        <button className="btn btn-twitter" onClick={handleTwitter}>
          Twitter / X
        </button>
      </div>
    </div>
  );
}
