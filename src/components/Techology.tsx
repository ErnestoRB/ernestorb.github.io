import { Draggable, Openable } from "@ernestorb/components";
import LanguageIcon from "./languages/LanguageIcon";

interface TechnologyProps {
  name: string;
  description: React.ReactNode;
  initialPosition: Coords;
}

export default function Technology({
  name,
  description,
  initialPosition,
}: TechnologyProps) {
  return (
    <Draggable initialPosition={initialPosition}>
      <Openable
        parent={
          <div className="flex items-center flex-wrap justify-center gap-x-2 bg-white text-black p-4 rounded-md touch-none select-none shadow-lg">
            {name}
            <LanguageIcon lang={name} />
          </div>
        }
      >
        <div className="bg-white bg-opacity-60 p-2 rounded-md touch-none w-64 select-none">
          {description}
        </div>
      </Openable>
    </Draggable>
  );
}
