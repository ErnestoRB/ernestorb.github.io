import Link from "./Link";
import githubIcon from "./iconos/github.svg";
import instagramIcon from "./iconos/instagram.svg";
import mailIcon from "./iconos/mail.svg";
import arrowDownIcon from "./iconos/arrow-down.svg";
import commentIcon from "./iconos/comment-square.svg";
import React from "react";

const ButtonOrganizer: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 place-items-center">
      {children}
    </div>
  );
};

const Landing = () => {
  return (
    <div className="relative flex flex-wrap w-full h-screen bg-white justify-center content-center gap-y-2">
      <div className="absolute top-0 left-0 h-32 md:h-64 aspect-square bg-[url('b1.svg')]"></div>
      <div className="absolute top-0 right-0 h-32 md:h-64 aspect-square bg-[url('b2.svg')]"></div>
      <h1 className="text-center block w-full font-['Coming_Soon'] font-regular text-4xl lg:text-6xl">
        Ernesto Ramírez
      </h1>
      <div className="flex flex-wrap w-full justify-center items-center gap-x-2">
        <ButtonOrganizer>
          <p>¿Quieres ver mi trabajo?</p>
          <Link
            href={"https://github.com/ErnestoRB"}
            className="bg-black text-white"
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
            className="bg-black text-white"
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
            className="bg-black text-white"
          >
            <img
              src={commentIcon}
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
          className="bg-blue-400 text-white"
        >
          <img src={mailIcon} alt="Email" className="inline w-8 h-8" />
          <span>Mándame un correo</span>
        </Link>
      </div>
      <a
        href="#me"
        className="absolute bottom-12 flex items-center justify-center border rounded-full border-black w-8 h-8"
      >
        <img src={arrowDownIcon} alt="arrow" className="inline w-4 h-4" />
      </a>
    </div>
  );
};

export default Landing;
