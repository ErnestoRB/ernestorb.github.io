import { animated as a, useTransition, config } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const items = [
  "¡Bienvenido a mi portafolio web!",
  "Desplázate hacia la derecha para ver más",
];

export function Description() {
  const ref = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    from: (item) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      return {
        translateX: `${x}%`,
        translateY: `${y}%`,
        opacity: 0,
      };
    },
    enter: {
      translateX: "0%",
      translateY: "0%",
      opacity: 1,
    },
    leave: (item) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      return {
        translateX: `${x}%`,
        translateY: `${y}%`,
        opacity: 0,
      };
    },
    precision: 0.000001,
    trail: 1000,
    config: { ...config.slow, clamp: true },
    onRest: (_springs, _ctrl, item) => {
      if (index >= items.length - 1) return;
      setIndex(index + 1);
    },
  });

  return (
    <div className="text-white text-center font-staatliches text-6xl" ref={ref}>
      {transitions((style, index, state) => {
        return (
          <a.div className="font-staatliches" style={style}>
            {items[index]}
          </a.div>
        );
      })}
    </div>
  );
}

export function MyComponent() {
  const [visible, setVisible] = useState(false);
  const [transitions, api] = useTransition(visible, () => {
    return {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0.5 },
      onRest: () => {
        console.log("called");
      },
      config: config.slow,
    };
  });

  useEffect(() => {
    api.start();
  }, []);

  return (
    <div className="text-white">
      <button onClick={() => setVisible((s) => !s)}>Mount</button>
      {transitions(
        (style, item) =>
          item && (
            <a.div className="bg-red-200 w-32 h-32" style={style}>
              {item}
            </a.div>
          )
      )}
    </div>
  );
}
