
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme.js";
import ThemeToggle from "../ui/ThemeToggle.jsx";

export default function LandingNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <nav className="container site-nav" aria-label="Main navigation">
        <Link to="/" className="site-brand" aria-label="Home">
          <span className="brand-mark">AA</span>
          <span className="brand-name">Ayush Agarwal</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/freelance">Freelance</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </nav>
    </header>
  );
}
