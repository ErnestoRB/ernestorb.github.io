import { useEffect } from "react";
import Landing from "./views/Landing";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div
      className="flex-row bg-white h-screen w-screen overflow-y-auto items-center 
    justify-center scroll-smooth font-['Quicksand'] relative"
    >
      <Landing />
    </div>
  );
}

export default App;
