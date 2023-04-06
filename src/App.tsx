import { useEffect } from "react";
import Landing from "./views/Landing";
import ErrorHandler from "./three/ErrorHandler";

function App() {
  useEffect(() => {
    if ("ResizeObserver" in window === false) {
      // Loads polyfill asynchronously, only if required.
      import("@juggle/resize-observer").then(({ ResizeObserver }) => {
        window.ResizeObserver = ResizeObserver;
      });
    }
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
    <ErrorHandler fallback="Hubo un problema inesperado, por favor, notificame por correo: ernestorb_@outlook.com">
      <div
        className="flex-row bg-white h-screen w-screen overflow-y-auto items-center 
    justify-center scroll-smooth font-['Quicksand'] relative"
      >
        <Landing />
      </div>
    </ErrorHandler>
  );
}

export default App;
