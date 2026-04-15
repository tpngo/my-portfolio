import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function readThemeFromDom(): "light" | "dark" {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(readThemeFromDom);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="theme-toggle">
      <button
        type="button"
        className="theme-toggle__btn"
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        aria-pressed={theme === "dark"}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="theme-toggle__icon" aria-hidden="true">
          {theme === "dark" ? "☀" : "☾"}
        </span>
      </button>
    </div>
  );
}
