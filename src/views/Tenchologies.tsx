import { DraggableContext } from "../components/Draggable";
import H1 from "../components/text/H1";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Technology from "../components/Techology";
import { animated as a } from "@react-spring/web";
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
    description: "He creado videojuegos con este lenguaje",
  },
  {
    name: "Java",
    description:
      "Fue mi primer lenguaje de programación. He creado gráficos, videojuegos, aplicaciones de escritorio, plugins, etc.",
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
        He usado esta base de datos no SQL para crear sistema de tickets y posts
        para{" "}
        <a
          href="https://mcmexi.co"
          className="font-semibold hover:text-red-300"
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
        Esto consciente de lo importante que son los proyectos de
        microservicios, es por ello que es necesario saber tecnologías para la
        escalar horizontalmente un sistema. Además, agiliza mi tiempo al
        desarrollar soluciones.
      </p>
    ),
  },
  {
    name: "Angular",
    description: (
      <p>
        Un framework completo para desarrollar aplicaciones Web. ¿Algo se ocupa?
        Seguramente angular lo tiene out of the box. Estoy trabajando en
        proyectos basados en Angular.
      </p>
    ),
  },
];

export default function Tech() {
  const ref = useRef<HTMLDivElement>(null);
  const [parentElement, setParentElement] = useState<HTMLElement | undefined>();
  const [lastZ, setLastZ] = useState(0);

  useEffect(() => setParentElement(ref.current!), []);

  return (
    <a.div
      id="techs"
      className="flex p-8 bg-gradient-to-br from-rose-300 to-blue-300 flex-col gap-y-8"
    >
      <H1 className="text-center font-bold xl:text-3xl decoration-black underline underline-offset-4">
        Tecnologías
      </H1>
      <div className="flex justify-center">
        <Card className="w-full">
          <P className="text-black">
            Estas son sólo algunas de las tecnologías con las que he trabajado a
            lo largo de mi carrera
          </P>
        </Card>
      </div>
      <div className="w-full h-screen relative" ref={ref}>
        {parentElement && (
          <DraggableContext.Provider
            value={{ refParent: parentElement, lastZ, setLastZ }}
          >
            {Techs.map((tech, i) => (
              <Technology {...tech} key={i}></Technology>
            ))}
          </DraggableContext.Provider>
        )}
      </div>
    </a.div>
  );
}
