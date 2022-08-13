import Tech from "./Tenchologies";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Me = () => {
  return (
    <div id="me" className="relative">
      <AboutMe></AboutMe>
      <Tech></Tech>
      <Projects></Projects>
    </div>
  );
};

export default Me;
