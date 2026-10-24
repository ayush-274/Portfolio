
import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme.js";
import ThemeToggle from "../ui/ThemeToggle.jsx";

import "./PortfolioNavbar.css";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Freelance", to: "/freelance" },
];

export default function PortfolioNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  function handlePortfolioSection(section) {
    closeMenu();

    if (location.pathname === "/portfolio") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <header className="portfolio-navbar">
      <nav
        className="portfolio-nav-container"
        aria-label="Main navigation"
      >
        <Link
          className="portfolio-nav-brand"
          to="/"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className="portfolio-nav-monogram">A.</span>

          <span className="portfolio-nav-brand-text">
            <strong>Ayush Agarwal</strong>
            <small>DATA · ANALYTICS · AI</small>
          </span>
        </Link>

        <div
          className={`portfolio-nav-links ${
            menuOpen ? "is-open" : ""
          }`}
          id="portfolio-navigation-links"
        >
          {navigationLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `portfolio-nav-link ${
                  isActive ? "is-active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            className="portfolio-nav-mobile-section-link"
            href="/portfolio#selected-work"
            onClick={() => handlePortfolioSection("selected-work")}
          >
            Selected work
          </a>

          <a
            className="portfolio-nav-mobile-section-link"
            href="/portfolio#experience"
            onClick={() => handlePortfolioSection("experience")}
          >
            Experience
          </a>

          <a
            className="portfolio-nav-mobile-section-link"
            href="/portfolio#skills"
            onClick={() => handlePortfolioSection("skills")}
          >
            Skills
          </a>
        </div>

        <div className="portfolio-nav-actions">
          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
          />

          <Link
            className="portfolio-nav-contact"
            to="/contact"
            onClick={closeMenu}
          >
            Contact
            <ArrowUpRight size={15} />
          </Link>

          <button
            className="portfolio-nav-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="portfolio-navigation-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
