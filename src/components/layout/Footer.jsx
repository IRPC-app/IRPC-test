import { footerLinks, footerCopy, brand } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function Footer() {
  const tr = useTranslate();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>IRPC</h3>
          <p>
            {tr(brand.name)}
            <br />
            {tr(brand.tagline)}
          </p>
          <p className="footer-mission">{footerCopy.mission}.</p>
        </div>

        <div>
          <strong>{tr(footerCopy.explore)}</strong>
          {footerLinks.explore.map((link) => (
            <a key={link.href} href={link.href}>{tr(link.label)}</a>
          ))}
        </div>

        <div>
          <strong>{tr(footerCopy.more)}</strong>
          {footerLinks.more.map((link) => (
            <a key={link.href} href={link.href}>{tr(link.label)}</a>
          ))}
        </div>

        <div>
          <strong>{tr(footerCopy.legal)}</strong>
          {footerLinks.legal.map((label) => (
            <span key={label.en} className="footer-legal-item">{tr(label)}</span>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {tr(brand.name)}. {tr(footerCopy.copyright)}</span>
      </div>
    </footer>
  );
}
