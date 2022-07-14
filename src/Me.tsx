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
    <div
      id="me"
      className="relative bg-rose-100 bg-gradient-to-br from-rose-400 to-blue-300"
    >
      <span className="absolute top-8 right-8 z-10 h-full">
        <div className="sticky top-8">
          <LinkSection links={["#1", "#2"]} />
        </div>
      </span>
      <div className="flex flex-col gap-y-8 backdrop-hue-rotate-15" id="1">
        <h2
          className="w-full font-bold text-center text-white
        decoration-black underline-offset-2 underline decoration-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-8"
        >
          Sobre mi
        </h2>

        <div className="flex flex-wrap h-screen w-full items-center justify-between px-8">
          <div className="w-full flex justify-center">
            <img
              alt="My face"
              className="aspect-square w-32 xl:w-64 contrast-125 rounded-full border-2 border-black shadow-md"
              src="https://avatars.githubusercontent.com/u/55329286"
            />
          </div>
          <Card>
            <p className="text-justify">
              Mi nombre completo es <b>Ernesto Rodrigo Ramírez Briano</b>, tengo
              20 años. <br />
              Soy estudiante de la{" "}
              <a
                href="https://uaa.mx"
                className="text-blue-300 underline decoration-black"
              >
                UAA
              </a>{" "}
              en la carrera de Ingeniería en Sistemas Computacionales.
            </p>
          </Card>
          <Card>
            <p className="text-justify">
              Desde que era pequeño tuve un interés gigantesco sobre las
              computadoras. En ese entonces sólo me interesaban los videojuegos
              (que por cierto, los jugaba desde un navegador)
            </p>
          </Card>
          <Card>
            <p className="text-justify">
              Creo firmemente que lo increíble que pueden llegar a ser las
              computadoras depende muchísimo de la pasión, entrega y
              conocimiento de los compañeros que conformamos esta área.
            </p>
          </Card>
        </div>
      </div>

      <div id="2" className="relative min-h-screen w-full bg-rose-600">
        <div className="flex flex-col flex-wrap px-8 gap-x-8 min-h-screen w-full bg-opacity-10 bg-black">
          <h2
            className="w-full font-bold text-center text-white
        decoration-black underline-offset-2 underline decoration-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-8"
          >
            Conocimientos
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 flex-1">
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
                  <b>JavaScript:</b> Conozco Javascript más que a otro lenguaje
                  de programación. Sé trabajarlo con NodeJS y en los
                  navegadores. Las tecnologías que mejor conozco son Express y
                  React. Conozco como crear REST APIS e interfaces gráficas.
                </li>
                <li>
                  <img
                    src={javaIcon}
                    alt="java logo"
                    className="inline-block w-8 h-8 mx-1"
                  />
                  <b>Java:</b> He trabajado con Java para crear interfaces
                  gráficas de escritorio y para realizar aplicaciones de línea
                  de comandos, también he generado plugins para servidores de
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
              <h2 className="font-bold block w-full">Tecnologías</h2>
              <ul data-techs className="list-disc list-inside w-full">
                <li>Linux (Ubuntu)</li>
                <li>Windows</li>
                <li>GitHub</li>
                <li>Azure</li>
                <li>Bootstrap</li>
                <li>CMake</li>
                <li>Maven</li>
                <li>NPM</li>
                <li>Allegro</li>
                <li>SpigotMC</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
                <li>...y probablemente muchas más que olvidé!</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      <div
        id="3"
        className="flex justify-center items-center bg-blue-300 h-screen"
      >
        <Card>
          <img
            src="https://thumbs.gfycat.com/AlertAdventurousAngwantibo-max-1mb.gif"
            alt="Estoy llenando aún!"
            className="aspect-auto w-64"
          />
        </Card>
      </div>
    </div>
  );
};

export default Me;
