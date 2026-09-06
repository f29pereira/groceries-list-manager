import "./lib/firebase/firebase";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/globals.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider";
import LanguageProvider from "./contexts/LanguageContext/LanguageProvider";
import "./lib/i18n/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      <ThemeProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </ThemeProvider>
    }
  </StrictMode>,
);
