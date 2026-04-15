import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { hydrateTheme } from "./theme";
import "./index.css";
import "./components.css";

hydrateTheme();

const el = document.getElementById("root");
if (!el) {
  throw new Error("Root element #root not found");
}

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>
);
