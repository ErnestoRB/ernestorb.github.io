import { useSpring, animated } from "@react-spring/web";
import { useDrag, useWheel } from "@use-gesture/react";
import { useRef } from "react";
import useGHRepos from "../hooks/useGHRepos";
import ProjectCard from "./ProjectCard";

export default function ProjectCardList({
  overlap = 100,
  cardWidth = 256,
  className = "",
}: {
  className?: BasicComponentProps["className"];
  overlap?: number;
  cardWidth?: number;
}) {
  const { error, data } = useGHRepos();
  const divRef = useRef<HTMLDivElement>(null!);
  const [{ scrollLeft }, api] = useSpring(() => ({ scrollLeft: 0 }));

  const bind = useDrag(
    ({ event, offset: [x] }) => {
      event.preventDefault();
      const nX = -x; // X va inverso al ScrollLeft
      api.start({
        scrollLeft: nX,
      });
    },
    {
      axis: "x",
      bounds: () => ({
        right: 0,
        left:
          data && divRef.current
            ? -Math.max(
                cardWidth * data.length -
                  overlap * (data.length - 1) -
                  divRef.current.clientWidth,
                0
              )
            : 0,
      }),
    }
  );

  useWheel(
    ({ event, offset: [x] }) => {
      event.preventDefault();
      const nX = -x; // X va inverso al ScrollLeft
      api.start({
        scrollLeft: nX,
      });
    },
    {
      axis: "x",
      bounds: () => ({
        right: 0,
        left:
          data && divRef.current
            ? -Math.max(
                cardWidth * data.length -
                  overlap * (data.length - 1) -
                  divRef.current.clientWidth,
                0
              )
            : 0,
      }),
      eventOptions: { passive: false },
      target: divRef,
    }
  );

  return (
    <animated.div
      {...bind()}
      className={`flex items-center overflow-x-hidden touch-none w-full ${className}`}
      scrollLeft={scrollLeft}
      ref={divRef}
    >
      {data &&
        data.map((props, i) => {
          props.style = {
            left: -overlap * i,
            width: cardWidth,
          };
          return <ProjectCard key={props.id} {...props}></ProjectCard>;
        })}
      {error && <div>Error al contactar la API de GitHub</div>}
    </animated.div>
  );
}
