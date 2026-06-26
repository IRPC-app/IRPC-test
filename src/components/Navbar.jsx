import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/browse", label: "Browse" },
    { to: "/submit", label: "Submit" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">☪</span>
        <span className="brand-name">Dawah Messages</span>
      </div>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={pathname === to ? "nav-link active" : "nav-link"}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
