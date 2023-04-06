import { useEffect, useRef, useState } from "react";

export default function useDark() {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark") ||
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  return {
    isDark,
    toggleDark() {
      setIsDark((dark) => {
        if (dark) {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
        } else {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        }
        return !dark;
      });
    },
  };
}
