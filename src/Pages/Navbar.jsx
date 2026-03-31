import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/",           label: "Accueil" },
  { to: "/Parcours",   label: "Parcours" },
  { to: "/Projects",   label: "Projet" },
  { to: "/Competence", label: "Compétence" },
  { to: "/Veille",     label: "Veille technologie" },
  { to: "/Contact",    label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">Portfolio</Link>
        <div className="navbar-links">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${pathname === to ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
