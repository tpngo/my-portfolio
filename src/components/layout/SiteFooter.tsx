import { Link } from "react-router-dom";
import { useAsyncData } from "../../hooks/useAsyncData";
import { fetchSiteMeta } from "../../services/contentService";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
] as const;

export function SiteFooter() {
  const siteState = useAsyncData("site-meta", fetchSiteMeta);
  const NAME = siteState.status === "success" ? siteState.data.name : "Portfolio";
  const contact = siteState.status === "success" ? siteState.data.contact : null;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{NAME}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Site">
          <p className="site-footer__heading">Navigate</p>
          <ul className="site-footer__nav-list">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact-block">
          <p className="site-footer__heading">Contact</p>
          <ul className="site-footer__contact-list" aria-label="Contact links">
            {contact ? (
              <>
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <a href={contact.githubUrl} rel="noopener noreferrer" target="_blank">
                    GitHub
                  </a>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <p className="site-footer__copy">© {new Date().getFullYear()} {NAME}</p>
      </div>
    </footer>
  );
}
