import { useEffect } from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Me from "./Me";

function App() {
  useEffect(() => {
    document.title = "Ernesto Ramírez Web Developer";
  }, []);

  return (
    <div
      className="flex-row bg-white h-screen w-screen overflow-y-auto items-center 
    justify-center scroll-smooth font-['Quicksand']"
    >
      <Landing />
      <Me />
      <Footer />
    </div>
  );
}

export default App;
