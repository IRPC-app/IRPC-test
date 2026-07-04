import { footerLinks } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>IRPC</h3>
          <p>
            Islamic Research & Propagation Centre
            <br />
            Know ISLAM, Know Peace.
          </p>
          <p className="footer-mission">Dawah to Humanity bil Hikmah.</p>
        </div>

        <div>
          <strong>Explore</strong>
          {footerLinks.explore.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div>
          <strong>More</strong>
          {footerLinks.more.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div>
          <strong>Legal</strong>
          {footerLinks.legal.map((label) => (
            <span key={label} className="footer-legal-item">{label}</span>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Islamic Research & Propagation Centre. All rights reserved.</span>
      </div>
    </footer>
  );
}
