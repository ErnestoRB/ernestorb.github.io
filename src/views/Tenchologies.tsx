import { DraggableContext } from "@ernestorb/components";
import H1 from "../components/text/H1";
import { useRef } from "react";
import { useState } from "react";
import { animated as a, useSpring } from "@react-spring/web";
import P from "../components/text/P";
import Card from "../components/Card";
import TechonologiesPanel from "../components/TechnologiesPanel";
import { usePosition } from "@ernestorb/useposition";
import { StackableContext } from "@ernestorb/components";

export default function Tech() {
  const ref = useRef<HTMLDivElement>(null);
  const [lastZ, setLastZ] = useState(1);

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

  const elementPosition = usePosition(ref);

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
    </a.div>
  );
}
