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
    description: "¡Esta app está creada con React!",
  },
  {
    name: "C",
    description:
      "He creado videojuegos, también he programado microcontroladores.",
  },
  {
    name: "Java",
    description:
      "He creado gráficos, videojuegos, aplicaciones de escritorio, plugins para SpigotMC, entre otoros.",
  },
  {
    name: "Javascript",
    description:
      "Lo sé usar tanto en navegadores y otros entornos de ejecución.",
  },
  {
    name: "Python",
    description: "Sólo he realizado unos cuantos scripts con éste lenguaje.",
  },
  {
    name: "Ubuntu",
    description: (
      <span>
        He trabajado con Ubuntu desde 2021. Se crear shell scripts
        <span>
          <LanguageIcon lang="shell"></LanguageIcon>
        </span>
        y además se manipular herramientas UN*X
      </span>
    ),
  },
  {
    name: "MongoDB",
    description: (
      <span>
        He usado esta base de datos NoSQL para crear sistema de tickets y posts
        para{" "}
        <a href="https://mcmexi.co" className="font-semibold">
          Royalmind Network
        </a>
      </span>
    ),
  },
  {
    name: "Express",
    description: <span>Mi framework web favorito.</span>,
  },
  {
    name: "Go",
    description: (
      <p>
        Usé la librería Go Graphics para generar las representaciones de algunos
        códigos binarios.
      </p>
    ),
  },
  {
    name: "Docker",
    description: (
      <p>
        Los microservicios son muy importantes. Como desarrollador, agiliza mi
        tiempo al desarrollar sistemas.
      </p>
    ),
  },
  {
    name: "Angular",
    description: (
      <p>
        Es un ecosistema robusto y completo para desarrollar aplicaciones Web de
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
