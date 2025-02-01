import { useEffect, useState } from "react";
import type { Route, Theme } from "../../types/profile";
import Button from "../../components/ui/Button"; // ✅ Import Button component

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
          <Button
            key={t}
            variant="primary"
            size="md"
            onClick={() => setTheme(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
}
