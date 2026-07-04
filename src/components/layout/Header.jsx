import { useState } from "react";
import { navLinks, headerCopy, brand } from "../../data/content";
import { useLanguage, useTranslate, LANGUAGES } from "../../i18n/LanguageContext";
import irpcLogo from "../../assets/irpc-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const tr = useTranslate();

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#top">
          <img className="logo-mark" src={irpcLogo} alt="IRPC" />
          <span className="logo-text">
            <strong>{tr(brand.name)}</strong>
            <span>{tr(brand.tagline)}</span>
          </span>
        </a>

        <nav className={menuOpen ? "primary-nav open" : "primary-nav"}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {tr(link.label)}
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
              {LANGUAGES.find((l) => l.code === language)?.label} <span aria-hidden="true">▾</span>
            </button>
            {langOpen && (
              <ul className="lang-menu" role="listbox">
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang.code === language}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a className="btn btn-ghost" href="#ai-daee">{tr(headerCopy.aiDaee)}</a>
          <a className="btn btn-primary" href="#donate">{tr(headerCopy.donate)}</a>
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
