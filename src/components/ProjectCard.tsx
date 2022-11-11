import { useState, useEffect } from "react";
import { animated } from "@react-spring/web";
import Card from "./Card";
import LanguageIcon from "./languages/LanguageIcon";

export interface ProjectCardProps {
  id?: number;
  name: string;
  description: string;
  html_url: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  language: string;
  languages_url: string;
}

export default function ProjectCard({
  name,
  description,
  style = {},
  html_url,
  languages_url,
}: ProjectCardProps) {
  const [languages, setLanguages] = useState<
    { [key: string]: string } | undefined
  >(undefined);

  useEffect(() => {
    if (!languages_url) {
      return;
    }
    fetch(languages_url)
      .then((res) => res.json())
      .then((data) => setLanguages(data));
  }, [languages_url]);

  return (
    <animated.div
      style={style}
      className="relative w-64 h-max flex-none hover:z-10"
    >
      <Card className="flex flex-col items-center gap-y-2 box-border bg-gray-500 hover:bg-gray-800 hover:border-blue-700 border-gray-200 border-2 text-white bg-opacity-80 backdrop-blur select-none">
        <a
          href={html_url}
          className="underline decoration-red-100 decoration-4"
        >
          <h1 className="text-lg font-bold ">{name}</h1>
        </a>
        <hr className=""></hr>
        <p className="text-md">{description}</p>
        {languages &&
          Object.keys(languages)
            .slice(0, 3)
            .map((langName) => (
              <LanguageIcon key={langName} lang={langName}></LanguageIcon>
            ))}
        {!languages && (
          <span>Error para mostrar los lenguajes del proyecto {name}</span>
        )}
      </Card>
    </animated.div>
  );
}
