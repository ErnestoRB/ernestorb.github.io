import { useEffect, useState } from "react";

export default function useDark() {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark") ||
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDark]);

  return {
    isDark,
    toggleDark() {
      setIsDark((dark) => !dark);
    },
  };
}
