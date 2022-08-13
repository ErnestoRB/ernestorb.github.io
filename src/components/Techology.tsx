import Draggable from "./Draggable";
import LanguageIcon from "./languages/LanguageIcon";
import Openable from "./Openable";

interface TechnologyProps {
  name: string;
  description: React.ReactNode;
}

export default function Technology({ name, description }: TechnologyProps) {
  return (
    <Draggable>
      <Openable>
        <div className="flex items-center flex-wrap justify-center bg-white text-black p-4 rounded-md touch-none select-none shadow-lg">
          {name}
          <LanguageIcon lang={name} />
        </div>
        <div className="bg-white bg-opacity-60 p-2 rounded-md touch-none w-64 select-none">
          {description}
        </div>
      </Openable>
    </Draggable>
  );
}
