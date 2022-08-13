import Card from "../components/Card";
import jsIcon from "./iconos/javascript.svg";
import javaIcon from "./iconos/java-original.svg";
import cIcon from "./iconos/c-plusplus.svg";
import CredlyBadge from "../components/Badge";

export default function Knowledges() {
  return (
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
            <h2 className="font-bold block w-full">
              Tecnologías con las que he trabajado
            </h2>
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
          <CredlyBadge></CredlyBadge>
        </div>
      </div>
    </div>
  );
}
