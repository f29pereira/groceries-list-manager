import "./lib/firebase/firebase";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/globals.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "./lib/i18n/i18n";
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider";
import LanguageProvider from "./contexts/LanguageContext/LanguageProvider";
import AuthProvider from "./contexts/AuthContext/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <RouterProvider router={router} />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    }
  </StrictMode>,
);
