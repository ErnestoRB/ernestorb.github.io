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
              className="relative w-full h-full flex justify-center items-center font-bebas text-6xl text-white"
              horizontal
              speed={0.5}
              offset={0}
              onClick={() => pRef.current?.scrollTo(1)}
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
                <div className="absolute skew-x-12 h-1/2 top-0 w-52 bg-purple-1 "></div>
                <div className="absolute -skew-x-12 h-1/2 bottom-0 w-52 bg-purple-3"></div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              key="about"
              className="pt-28 w-full h-full text-white"
              horizontal
              speed={1}
              offset={1}
              onClick={(e) => {
                pRef.current?.scrollTo(2);
              }}
            >
              <AboutMe />
            </ParallaxLayer>
            <ParallaxLayer
              key="projects"
              horizontal
              offset={2}
              onClick={(e) => {
                pRef.current?.scrollTo(3);
              }}
              speed={0.1}
              className="relative w-full max-h-full z-10 flex flex-row bg-gray-500"
            >
              <div className="-skew-x-3 md:-skew-x-6 -translate-x-1/2 h-full bottom-0 w-16 md:w-36 lg:w-52 bg-gradient-to-t from-rose-1 to-rose-4"></div>
              <div className="flex-1 flex flex-col overflow-auto gap-y-2 pt-28 px-2 ">
                <h1 className="text-5xl lg:text-8xl text-white text-center font-staatliches">
                  Mis proyectos
                </h1>
                <ProjectGrid />
              </div>
              <div className="skew-x-3 md:skew-x-6 translate-x-1/2 h-full bottom-0 w-16 md:w-36 lg:w-52 bg-gradient-to-t from-rose-4 to-rose-1"></div>
            </ParallaxLayer>
            <ParallaxLayer
              key="gradient"
              className="bg-gradient-to-tr from-blue-800 to-purple-1 -z-20"
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
