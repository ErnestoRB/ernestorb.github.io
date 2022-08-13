import { animated } from "@react-spring/web";
import Card from "./Card";
import LanguageIcon from "./languages/LanguageIcon";

export interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  style: React.HTMLAttributes<HTMLDivElement>["style"];
  language: string;
}

export default function ProjectCard({
  name,
  description,
  style,
  html_url,
  language,
}: ProjectCardProps) {
  return (
    <animated.div
      style={style}
      className="relative w-64 h-max flex-none hover:z-10"
    >
      <Card className="flex flex-col items-center gap-y-2 box-border bg-gray-500 hover:bg-gray-800 hover:border-blue-700 border-gray-200 border-2 text-white select-none">
        <a
          href={html_url}
          className="underline decoration-red-100 decoration-4"
        >
          <h1 className="text-lg font-bold ">{name}</h1>
        </a>
        <hr className=""></hr>
        <p className="text-md">{description}</p>
        <Card className="flex items-center justify-center">
          <LanguageIcon lang={language}></LanguageIcon>
        </Card>
      </Card>
    </animated.div>
  );
}
