import { useEffect, useId, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useAsyncData } from "../../hooks/useAsyncData";
import { fetchContactLinks } from "../../services/contentService";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `site-header__link${isActive ? " site-header__link--active" : ""}`;

export function SiteHeader() {
  const contactState = useAsyncData("contact-links", fetchContactLinks);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__brand" end>
          <span className="site-header__brand-mark" aria-hidden="true" />
          <span>Portfolio</span>
        </NavLink>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="site-header__menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          id={panelId}
          className={`site-header__panel${
            menuOpen ? " site-header__panel--open" : ""
          }`}
        >
          <nav className="site-header__nav" aria-label="Primary">
            <ul className="site-header__list">
              <li>
                <NavLink
                  to="/"
                  className={navLinkClass}
                  end
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="site-header__actions">
            {contactState.status === "success" ? (
              <a
                href={contactState.data.githubUrl}
                className="site-header__github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                <svg
                  className="site-header__github-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            ) : null}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
