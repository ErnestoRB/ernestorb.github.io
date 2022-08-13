import { useSpring, animated as a } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePosition } from "@ernestorb/useposition";

interface DraggableContextValue {
  refParent?: HTMLElement;
  initialPosition?: Coords;
}

export const DraggableContext = React.createContext<DraggableContextValue>({});

const config = {
  tension: 200,
  mass: 1,
  friction: 20,
};

export default function Draggable({
  children,
  className = "",
  axis,
}: BasicComponentProps & { axis?: "x" | "y" | "lock" }) {
  const { refParent, initialPosition: contextInitPos } =
    useContext(DraggableContext);
  const [initPos, setInitPos] = useState<Coords>(
    contextInitPos || {
      x: 0,
      y: 0,
    }
  );

  const ref = useRef<HTMLDivElement>(null);
  const [xP, yP] = useMemo(() => [Math.random(), Math.random()], []);
  const [{ x, y }, api] = useSpring(() => ({
    from: { ...initPos },
    cancel: true,
    config,
  }));
  const [parentElement, setParentElement] = useState<HTMLElement | undefined>(
    refParent
  );

  const adjustDefaultPosition = useCallback(() => {
    if (contextInitPos || !parentElement) return;
    const element = ref.current!;
    setInitPos({
      x: Math.max(0, xP * parentElement.clientWidth - element.clientWidth),
      y: Math.max(0, yP * parentElement.clientHeight - element.clientHeight),
    });
  }, [xP, yP, parentElement, contextInitPos]);

  usePosition(parentElement, (_, { windowResize }) => {
    if (windowResize) {
      adjustDefaultPosition();
    }
  });

  useEffect(() => {
    const p = refParent || ref.current!.parentElement!;
    setParentElement(p);
  }, [refParent]);

  useEffect(() => {
    if (contextInitPos) {
      setInitPos(contextInitPos);
    } else {
      adjustDefaultPosition();
    }
  }, [contextInitPos, adjustDefaultPosition]);

  useEffect(() => {
    api.start({ ...initPos });
  }, [initPos, api]);

  const bind = useDrag(
    ({ offset: [x, y], tap, event }) => {
      if (tap) {
        return;
      }
      api.start({ x, y, config });
      event.preventDefault();
      event.stopPropagation();
    },
    {
      bounds: () => parentElement || { top: 0, left: 0, bottom: 0, right: 0 },
      from: () => [x.get(), y.get()],
      filterTaps: true,
      axis,
    }
  );

  return (
    <a.div
      {...bind()}
      style={{ top: y, left: x }}
      ref={ref}
      className={`absolute touch-none ${className}`}
    >
      {children}
    </a.div>
  );
}
