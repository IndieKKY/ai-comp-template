import { useState, useEffect } from "react";

export const setTheme = (theme: string) => {
  const appRoot = document.documentElement;
  if (appRoot != null) {
    appRoot.setAttribute("data-theme", theme);
    if (theme === "dark") {
      appRoot.classList.add("dark");
      appRoot.classList.remove("light");
    } else {
      appRoot.classList.add("light");
      appRoot.classList.remove("dark");
    }
  }
};

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setTheme(dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="flex gap-1">
      <input
        id="dark"
        type="checkbox"
        value={dark}
        onChange={(e) => setDark(e.target.checked)}
      />
      <label htmlFor="dark">Dark Mode</label>
    </div>
  );
}
