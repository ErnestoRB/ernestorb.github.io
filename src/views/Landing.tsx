import Link from "../components/Link";
import githubIcon from "../iconos/github.svg";
import instagramIcon from "../iconos/instagram.svg";
import mailIcon from "../iconos/mail.svg";
import arrowDownIcon from "../iconos/arrow-down.svg";
import bloggerIcon from "../iconos/blogger.svg";
import React from "react";
import { animated as a, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const ButtonOrganizer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 place-items-center">
      {children}
    </div>
  );
};

const Landing = () => {
  const [{ xy }, api] = useSpring(() => ({
    xy: [25, 0] as [number, number],
  }));

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: 20 },
    loop: { reverse: true },
    config: {
      mass: 1,
      friction: 5,
      tension: 30,
    },
  });

  const bind = useDrag(
    ({ offset }) => {
      api.start({ xy: offset });
    },
    {
      axis: "x",
      bounds: { left: -200, right: 200 },
    }
  );

  return (
    <div className="relative bg-transparent text-black touch-pan-y" {...bind()}>
      <a.div
        style={{ backgroundPosition: xy.to((x) => `${x / 4}vw 0%`) }}
        className="absolute top-0 left-0 bg-gradient-to-br from-blue-600 to-blue-300  bg-fixed w-full h-full"
      ></a.div>
      <div className="flex flex-wrap w-full h-screen justify-center content-center gap-y-2 relative z-10">
        <h1 className="text-center block w-full font-['Coming_Soon'] font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl select-none">
          Ernesto Ramírez
        </h1>
        <div className="flex flex-wrap w-full justify-center items-center gap-x-2">
          <ButtonOrganizer>
            <p>¿Quieres ver mi trabajo?</p>
            <Link
              href={"https://github.com/ErnestoRB"}
              className="bg-white text-black shadow-lg"
            >
              <img
                src={githubIcon}
                alt="GitHub repo"
                className="inline w-8 h-8 "
              />
              <span>Ir a mi GitHub</span>
            </Link>
          </ButtonOrganizer>
          <ButtonOrganizer>
            <p>¿Quieres involucrarte en mi vida personal?</p>
            <Link
              href={"https://github.com/ErnestoRB"}
              className="bg-white text-black shadow-lg"
            >
              <img
                src={instagramIcon}
                alt="Instagram profile"
                className="inline w-8 h-8 "
              />
              <span>Ir a mi Instagram</span>
            </Link>
          </ButtonOrganizer>
          <ButtonOrganizer>
            <p>Lee cosas interesantes</p>
            <Link
              href={"https://blog.ernestorb.com"}
              className="bg-white text-black shadow-lg"
            >
              <img
                src={bloggerIcon}
                alt="GitHub repo"
                className="inline w-8 h-8 "
              />
              <span>Visita mi blog</span>
            </Link>
          </ButtonOrganizer>
        </div>
        <div className="flex w-full justify-center content-center">
          <Link
            href={"mailto:ernestorb_@outlook.com"}
            className="bg-white text-black shadow-lg"
          >
            <img src={mailIcon} alt="Email" className="inline w-8 h-8" />
            <span>Mándame un correo</span>
          </Link>
        </div>
        <a.a
          style={{ y }}
          href="#me"
          className="absolute bottom-12 flex items-center justify-center border rounded-full border-white bg-white w-8 h-8 shadow-lg"
        >
          <img src={arrowDownIcon} alt="arrow" className="inline w-4 h-4" />
        </a.a>
      </div>
    </div>
  );
};

export default Landing;