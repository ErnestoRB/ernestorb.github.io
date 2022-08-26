import { useEffect } from "react";
import LinkSection from "./components/LinkSection";
import Footer from "./views/Footer";
import Landing from "./views/Landing";
import Me from "./views/Me";

function App() {
  return (
    <div
      className="flex-row bg-white h-screen w-screen overflow-y-auto items-center 
    justify-center scroll-smooth font-['Quicksand'] relative"
    >
      <span className="fixed top-8 right-8 z-20 h-full">
        <LinkSection links={["#about", "#techs", "#projects"]} />
      </span>
      <Landing />
      <Me />
      <Footer />
    </div>
  );
}

export default App;
