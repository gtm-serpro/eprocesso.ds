import { useEffect, useState } from "react";
import type { Route, Theme } from "../../types/profile";

export function meta({}: Route["MetaArgs"]) {
  return [{ title: "User Profile" }];
}

export default function ProfilePage() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as Theme) || "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-2">Select your theme preference:</p>

      <div className="mt-4 flex gap-4">
        {(["light", "dark", "accessible"] as Theme[]).map((t) => (
          <button
            key={t}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            onClick={() => setTheme(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
