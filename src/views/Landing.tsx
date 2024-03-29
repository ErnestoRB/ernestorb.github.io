import { Description } from "../components/Description";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ProjectGrid } from "./ProjectGrid";
import Tech from "./Tenchologies";
import NavBar from "../components/NavBar";
import AboutMe from "./AboutMe";
import { useMemo, useRef } from "react";
import { registerHoverEvent } from "../utils/hover";

const Landing = () => {
  const pRef = useRef<IParallax>(null);
  const bind = useMemo(registerHoverEvent, []);

  return (
    <div className="relative bg-transparent overflow-x-clip text-black flex flex-col h-full w-full">
      <NavBar></NavBar>
      <div className="gradient-hover flex-1 relative" {...bind}>
        <Parallax pages={4} horizontal config={{}} ref={pRef}>
          <div className="w-full h-full">
            <ParallaxLayer
              key="welcome"
              className="relative w-full h-full flex justify-center items-center font-bebas text-6xl text-white dark:text-white "
              horizontal
              speed={0.5}
              offset={0}
            >
              <Description />
            </ParallaxLayer>
            <ParallaxLayer
              key="badges"
              className="relative -z-10 w-full h-full flex justify-center items-center text-white"
              horizontal
              speed={1}
              offset={0.25}
            >
              <div>
                <div className="absolute skew-x-12 h-1/2 top-0 w-52 bg-rose-1 dark:bg-purple-1  "></div>
                <div className="absolute -skew-x-12 h-1/2 bottom-0 w-52 bg-rose-4 dark:bg-purple-3"></div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              key="about"
              className="pt-28 w-full h-full text-white"
              horizontal
              speed={1}
              offset={1}
            >
              <AboutMe />
            </ParallaxLayer>
            <ParallaxLayer
              key="projects"
              horizontal
              offset={2}
              speed={0.1}
              className="relative w-full max-h-full z-10 flex flex-row bg-blanco-300 backdrop-blur-sm dark:bg-gray-500"
            >
              <div className="-skew-x-3 md:-skew-x-6 -translate-x-1/2 h-full bottom-0 w-16 md:w-36 lg:w-52 bg-purple-3 dark:bg-gradient-to-t from-rose-1 to-rose-4"></div>
              <div className="flex-1 flex flex-col overflow-auto gap-y-2 pt-28 px-2">
                <h1 className="text-5xl lg:text-8xl  text-center font-staatliches text-black dark:text-white">
                  Mis proyectos
                </h1>
                <ProjectGrid />
              </div>
              <div className="skew-x-3 md:skew-x-6 translate-x-1/2 h-full bottom-0 w-16 md:w-36 lg:w-52 bg-purple-3 dark:bg-gradient-to-t from-rose-4 to-rose-1"></div>
            </ParallaxLayer>
            <ParallaxLayer
              key="gradient"
              className="bg-transparent dark:bg-gradient-to-tr dark:from-blue-800 dark:to-purple-1 to-blue-300 from-purple-1 -z-20"
              style={{
                width: "120%",
              }}
              offset={2.9}
              speed={0}
            ></ParallaxLayer>
            <ParallaxLayer
              key="tech"
              horizontal
              offset={3}
              speed={0.1}
              className="pt-28 w-full h-full mx-4"
            >
              <Tech />
            </ParallaxLayer>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Landing;
