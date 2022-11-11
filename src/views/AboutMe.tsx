import {
  useTransition,
  animated as a,
  config,
  useSpring,
} from "@react-spring/web";
import FaceBox from "../three/FaceBox";
import Container from "../components/Container";
import H2 from "../components/text/H2";
import P from "../components/text/P";
import TextDecoration from "../components/text/TextDecoration";
import { useEffect, useRef } from "react";

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
      className="text-white bg-rose-700 backdrop-opacity-70 rounded px-1 mx-1 py-0.5"
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
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 1000,
    expires: 2,
    config: config.gentle,
  }));

  const styles = useSpring({
    to: {
      scale: 1.2,
    },
    from: {
      scale: 1,
    },
    config: { mass: 5, tension: 180, friction: 40 },

    loop: {
      reverse: true,
    },
  });

  useEffect(() => {
    if (!window.IntersectionObserver) {
      api.start({ immediate: true });
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            api.start();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    obs.observe(target.current!);

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <Container
      className="flex flex-col h-screen relative shadow-inner"
      id="about"
    >
      <div className="flex flex-col z-10 h-full">
        <H2 className="w-full text-center font-bold text-white z-50">
          <TextDecoration className="before:bg-black before:shadow-lg">
            Sobre mí
          </TextDecoration>
        </H2>
        <div className="flex flex-col  md:flex-row flex-grow w-full items-stretch px-8 justify-center gap-x-5 md:gap-x-10 xl:gap-x-20 gap-y-5 md:gap-y-0">
          <div className="flex-shrink flex justify-center items-center bg-blue-600">
            <div
              data-canvas="face"
              className="flex justify-center relative w-32 h-32 md:w-64 md:h-64 right-0 touch-none"
            >
              <a.span
                style={styles}
                className="border-black absolute bg-black text-white px-2 py-1 rounded shadow-lg"
              >
                Gírame!
              </a.span>
              <FaceBox></FaceBox>
            </div>
          </div>
          <ul
            className="flex flex-col items-center md:h-full justify-center gap-y-4 max-w-3xl"
            ref={target}
          >
            {transitions(({ opacity }, item) => {
              return (
                item && (
                  <a.li style={{ opacity }} className="before:content['>']">
                    {item}
                  </a.li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
}
