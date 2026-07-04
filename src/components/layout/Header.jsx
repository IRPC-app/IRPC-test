import { useState } from "react";
import { navLinks, languages } from "../../data/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#top">
          <span className="logo-mark">IRPC</span>
          <span className="logo-text">
            <strong>Islamic Research & Propagation Centre</strong>
            <span>Know ISLAM, Know Peace.</span>
          </span>
        </a>

        <nav className={menuOpen ? "primary-nav open" : "primary-nav"}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-select">
            <button
              type="button"
              className="lang-toggle"
              onClick={() => setLangOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {language} <span aria-hidden="true">▾</span>
            </button>
            {langOpen && (
              <ul className="lang-menu" role="listbox">
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === language}
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost" href="#ai-daee">AI Da'ee</a>
          <a className="btn btn-primary" href="#donate">Donate</a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
