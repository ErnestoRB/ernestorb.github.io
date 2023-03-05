import { useTransition, animated as a, config } from "@react-spring/web";
import FaceBox from "../three/FaceBox";
import P from "../components/text/P";
import { useEffect, useRef } from "react";
import H1 from "../components/text/H1";
import ErrorHandler from "../three/ErrorHandler";
import { usePosition } from "@ernestorb/useposition";

const items = [
  <P className="text-center">
    Mi nombre es <b>Ernesto Ramírez</b>, tengo 20 años. <br />
  </P>,
  <P className="text-center">
    Soy un apasionado por las computadoras 💻, el deporte ⚽ y la música 🎵.
  </P>,
  <P className="text-center">
    Actualmente estudio Ingeniería en Sistemas Computacionales en la
    <a
      href="https://uaa.mx"
      className="text-white underline decoration-purple-1 decoration-4 backdrop-opacity-70 rounded px-1 mx-1 py-0.5"
    >
      UAA
    </a>
  </P>,
  <P className="text-center">
    Desde que era pequeño tuve un gran interés por la computación.
  </P>,
  <P className="text-center">Me encanta y me especializo en desarrollo WEB</P>,
  <P className="text-center">
    Creo firmemente que la dedicación y la constancia son los pilares para
    desarrollar cualquier proyecto
  </P>,
];

export default function AboutMe() {
  const target = useRef<HTMLUListElement>(null);

  const [transitions, api] = useTransition(items, () => ({
    from: { opacity: 0, translateY: "100%", translateX: "0%" },

    enter: { opacity: 1, translateY: "0%", translateX: "0%" },
    leave: { opacity: 0, translateY: "100%", translateX: "100%" },
    trail: 1000,
    expires: 2,
    config: config.gentle,
    exitBeforeEnter: true,
  }));

  const position = usePosition(target);

  useEffect(() => {
    if (!position) {
      return;
    }
    if (position.visible > 0.1) {
      api.start();
    }
  }, [position]);

  return (
    <div className="grid auto-rows-max place-content-center gap-y-4 sm:gap-y-8 z-10 h-full">
      <H1 className="w-full text-center font-bold font-staatliches text-white z-50">
        Sobre mí
      </H1>
      <div className="flex flex-col md:flex-row w-full items-center px-8 justify-center gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-5 md:gap-y-0">
        <div className="flex-shrink flex justify-center items-center">
          <div
            data-canvas="face"
            className="flex justify-center items-center relative w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 right-0 touch-none bg-gradient-to-tr from-purple-1 to-purple-3 rounded"
          >
            <ErrorHandler
              fallback={
                <img
                  src="https://avatars.githubusercontent.com/u/55329286?s=400&u=809547778a8f79d3f4a0e21762fc408958ceca0c&v=4"
                  alt="me"
                />
              }
            >
              <FaceBox></FaceBox>
            </ErrorHandler>
          </div>
        </div>
        <ul
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="grid place-items-center md:h-full gap-y-2 md:gap-y-4 max-w-3xl"
          ref={target}
        >
          {transitions(({ opacity, translateY }, item) => {
            return (
              item && (
                <a.li
                  style={{ opacity, translateY }}
                  className="before:content['>']"
                >
                  {item}
                </a.li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}
