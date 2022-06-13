import jsIcon from "./iconos/javascript.svg";
import javaIcon from "./iconos/java-original.svg";
import cIcon from "./iconos/c-plusplus.svg";
import LinkSection from "./LinkSection";

const Card: React.FC<{ id?: string; className?: string }> = ({
  children,
  id = "",
  className = ""
}) => (
  <div
    id={id}
    className={`flex flex-wrap content-center justify-center max-w-md md:max-w-lg lg:max-w-2xl bg-white shadow-lg bg-opacity-80 rounded-lg p-2 md:p-4 lg:p-8 ${className}`}
  >
    {children}
  </div>
);

const Me = () => {
  return (
    <div id="me" className="relative">
      <span className="absolute top-8 left-1/2 -translate-x-1/2 h-full z-10">
        <div className="sticky top-0">
          <LinkSection links={["#1", "#2"]} />
        </div>
      </span>
      <div className="flex h-screen w-full bg-gradient-to-br from-rose-400 to-blue-300 items-center justify-start px-8">
        <Card id="1">
          <div className="w-full flex justify-center">
            <img
              alt="My face"
              className="aspect-square w-16 xl:w-32 contrast-125 rounded-full border border-black"
              src="https://avatars.githubusercontent.com/u/55329286"
            />
          </div>
          <p>
            Tengo 20 años. <br />
            Soy estudiante en la Universidad Autónoma de Aguascalientes en la
            carrera de Ingeniería en Sistemas Computacionales. Mi meta es ser
            desarrollador WEB porque disfruto hacerlo.
            <br /> He trabajado en bastantes proyectos y estaré encantado de
            recibir nuevos. <br />
            Dame un problema y siempre tendré la curiosidad de encontrar una
            solución.
          </p>
        </Card>
      </div>
      <div
        id="2"
        className="relative h-screen w-full bg-gradient-to-bl from-blue-300 to-rose-400 "
      >
        <div className="flex flex-wrap items-center justify-center px-8 gap-x-8 h-full w-full bg-opacity-10 bg-black">
          <h2
            className="absolute top-8 left-1/2 -translate-x-1/2 font-bold text-center text-white
        decoration-black underline-offset-2 underline decoration-8 text-3xl"
          >
            Conocimientos
          </h2>
          <Card>
            <h2 className="font-bold block w-full">
              Lenguajes de programación
            </h2>
            <ul className="block text-justify">
              <li>
                <img
                  src={jsIcon}
                  alt="javascript logo"
                  className="inline-block w-8 h-8 mx-1"
                />
                <b>JavaScript:</b> Conozco Javascript más que a otro lenguaje de
                programación. Sé trabajarlo con NodeJS y en los navegadores. Las
                tecnologías que mejor conozco son Express y React. Conozco como
                crear REST APIS e interfaces gráficas.
              </li>
              <li>
                <img
                  src={javaIcon}
                  alt="java logo"
                  className="inline-block w-8 h-8 mx-1"
                />
                <b>Java:</b> He trabajado con Java para crear interfaces
                gráficas de escritorio y para realizar aplicaciones de línea de
                comandos, también he generado plugins para servidores de
                Minecraft.
              </li>
              <li>
                <img
                  src={cIcon}
                  alt="c++ logo"
                  className="inline-block w-8 h-8 mx-1"
                />
                <b>C++:</b> Durante mi formación profesional he estado en
                contacto con este lenguaje para escribir aplicaciones de línea
                de comandos, juegos, además de escribir rutinas para
                microcontroladores como el ATmega8515.
              </li>
            </ul>
          </Card>
          <Card>
            <h2 className="font-bold block w-full">Idiomas</h2>
            <p className="block w-full">
              Actualmente sólo sé Inglés y Español.
            </p>
          </Card>
          <Card>
            <img
              src="https://thumbs.gfycat.com/AlertAdventurousAngwantibo-max-1mb.gif"
              alt="Estoy llenando aún!"
              className="aspect-auto w-64"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Me;
