import { DraggableContext } from "@ernestorb/components";
import { useRef } from "react";
import { useState } from "react";
import P from "../components/text/P";
import Card from "../components/Card";
import TechonologiesPanel from "../components/TechnologiesPanel";
import { usePosition } from "@ernestorb/useposition";
import { StackableContext } from "@ernestorb/components";

export default function Tech() {
  const ref = useRef<HTMLDivElement>(null);
  const [lastZ, setLastZ] = useState(1);

  const elementPosition = usePosition(ref);

  return (
    <div id="techs" className="flex p-8 flex-col gap-y-8 w-full h-full">
      <div className="flex justify-center">
        <Card className="w-full">
          <P className="text-black text-center">
            He trabajado con todas las tecnologías a continuación. Mi
            especialidad es la programación web.
          </P>
        </Card>
      </div>
      <div className="w-full h-full relative" ref={ref}>
        <StackableContext.Provider value={{ lastZ, setLastZ }}>
          <DraggableContext.Provider value={{ bounds: ref }}>
            {elementPosition && (
              <TechonologiesPanel
                width={elementPosition.width}
                height={elementPosition.height}
              ></TechonologiesPanel>
            )}
          </DraggableContext.Provider>
        </StackableContext.Provider>
      </div>
    </div>
  );
}
