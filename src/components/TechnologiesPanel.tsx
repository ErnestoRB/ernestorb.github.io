import { useMemo } from "react";
import LanguageIcon from "./languages/LanguageIcon";
import Technology from "./Techology";

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

export default function TechonologiesPanel({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const position = useMemo(
    () =>
      Techs.map(() => ({
        x: Math.max(Math.random() * width - 200, 0),
        y: Math.max(Math.random() * height - 200, 0),
      })),
    [width, height]
  );

  return (
    <>
      {Techs.map((tech, i) => (
        <Technology
          {...tech}
          initialPosition={position[i]}
          key={i}
        ></Technology>
      ))}
    </>
  );
}
