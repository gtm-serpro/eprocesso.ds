import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import type { Route } from "./types/root";

import Header from "./components/Header"; // ✅ Import Header
import "./styles/app.css";

// ✅ Function to get the theme instantly on first render (prevents white flash)
function getInitialTheme() {
  if (typeof window === "undefined") return "light"; // Default to light on SSR
  return localStorage.getItem("theme") || "light";
}

export default function Root() {
  const location = useLocation();
  const theme = getInitialTheme(); // Get theme instantly before render

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [location.pathname]);

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* ✅ Inline script to set theme instantly (avoids white flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
        <Header /> {/* ✅ Add Header Component */}
        <main className="container mx-auto min-h-screen flex flex-col items-center justify-center pt-16">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
