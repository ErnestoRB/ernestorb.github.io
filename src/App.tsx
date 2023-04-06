import Landing from "./views/Landing";
import ErrorHandler from "./three/ErrorHandler";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if ("ResizeObserver" in window === false) {
      // Loads polyfill asynchronously, only if required.
      import("@juggle/resize-observer").then(({ ResizeObserver }) => {
        window.ResizeObserver = ResizeObserver;
      });
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
