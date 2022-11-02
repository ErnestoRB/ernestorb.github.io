import { DraggableContext } from "../components/Draggable";
import H1 from "../components/text/H1";
import { useRef } from "react";
import { useState } from "react";
import Technology from "../components/Techology";
import { animated as a, useSpring } from "@react-spring/web";
import P from "../components/text/P";
import Card from "../components/Card";
import LanguageIcon from "../components/languages/LanguageIcon";

type TechItem = {
  name: string;
  description: React.ReactNode;
};

const Techs: TechItem[] = [
  {
    name: "React",
    description: "Esta app está creada con React",
  },
  {
    name: "C",
    description:
      "He creado videojuegos con este lenguaje. Usé la librería Allegro para conseguirlo.",
  },
  {
    name: "Java",
    description:
      "Fue mi primer lenguaje de programación. He creado gráficos, videojuegos, aplicaciones de escritorio, plugins para SpigotMC, etc.",
  },
  {
    name: "Javascript",
    description:
      "Por lejos mi lenguaje favorito. Tanto en navegadores y entornos de ejecución fuera de ellos.",
  },
  {
    name: "Python",
    description:
      "Para ser sincero, sólo he desarrollado algunos scripts en este lenguaje.",
  },
  {
    name: "Ubuntu",
    description: (
      <span>
        He trabajado con Ubuntu por una cantidad considerable de tiempo. Se
        crear scripts en <LanguageIcon lang="shell"></LanguageIcon> y además se
        manipular herramientas UN*X
      </span>
    ),
  },
  {
    name: "MongoDB",
    description: (
      <span>
        He usado esta base de datos NoSQL para crear sistema de tickets y posts
        para{" "}
        <a
          href="https://mcmexi.co"
          className="font-semibold text-red-100 hover:text-red-300"
        >
          Royalmind Network
        </a>
      </span>
    ),
  },
  {
    name: "Express",
    description: (
      <span>
        Mi framework web favorito.
        <a
          href="https://mcmexi.co"
          className="font-semibold hover:text-red-300"
        >
          Royalmind Network API
        </a>{" "}
        está hecha con Express.
      </span>
    ),
  },
  {
    name: "Go",
    description: (
      <p>
        Mi curiosidad por Go me llevó a usarlo en un programa que desarrollé
        junto con un amigo para un trabajo de la universidad. Usamos Go Graphics
        para graficar códigos binarios
      </p>
    ),
  },
  {
    name: "Docker",
    description: (
      <p>
        Estoy consciente de lo importante que son los microservicios. Agiliza mi
        tiempo al desarrollar soluciones.
      </p>
    ),
  },
  {
    name: "Angular",
    description: (
      <p>
        Pionero en desarrollo de aplicaciones renderizadas en el cliente. Es un
        ecosistema robusto y completo para desarrollar aplicaciones Web de
        manera ágil.
      </p>
    ),
  },
];

export default function Tech() {
  const ref = useRef<HTMLDivElement>(null);
  const [lastZ, setLastZ] = useState(0);

  const { background } = useSpring({
    from: {
      background: "linear-gradient(to bottom right,#dc7ab6, #82ccf0)",
    },
    to: {
      background: "linear-gradient(to bottom right, #5fbdec, #b93b88)",
    },
    loop: { reverse: true },
    config: { duration: 10000 },
  });

  return (
    <a.div
      id="techs"
      style={{ background }}
      className="flex p-8 flex-col gap-y-8"
    >
      <H1 className="text-center font-bold xl:text-3xl">Tecnologías</H1>
      <div className="flex justify-center">
        <Card className="w-full">
          <P className="text-black text-center">
            He trabajado con todas las tecnologías a continuación. Mi
            especialidad es la programación web.
          </P>
        </Card>
      </div>
      <div className="w-full h-screen relative" ref={ref}>
        <DraggableContext.Provider value={{ refParent: ref, lastZ, setLastZ }}>
          {Techs.map((tech, i) => (
            <Technology {...tech} key={i}></Technology>
          ))}
        </DraggableContext.Provider>
      </div>
    </a.div>
  );
}
