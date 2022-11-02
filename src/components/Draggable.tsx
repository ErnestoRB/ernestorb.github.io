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
  refParent?: React.RefObject<HTMLElement>;
  initialPosition?: Coords;
  lastZ: number;
  setLastZ: React.Dispatch<React.SetStateAction<number>>;
}

export const DraggableContext = React.createContext<DraggableContextValue>({
  lastZ: 0,
  setLastZ: () => {},
});

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
  const {
    refParent,
    initialPosition: contextInitPos,
    lastZ,
    setLastZ,
  } = useContext(DraggableContext);
  const [initPos, setInitPos] = useState<Coords>(
    contextInitPos || {
      x: 0,
      y: 0,
    }
  );

  const [zIndex, setZIndex] = useState(lastZ);

  const ref = useRef<HTMLDivElement>(null);
  const [xP, yP] = useMemo(() => [Math.random(), Math.random()], []);
  const [{ x, y }, api] = useSpring(() => ({
    from: { ...initPos },
    cancel: true,
    config,
  }));

  const adjustDefaultPosition = useCallback(() => {
    const parentElement = refParent || ref;
    if (contextInitPos || !parentElement) return;
    const element = ref.current!;
    setInitPos({
      x: Math.max(
        0,
        xP * parentElement.current!.clientWidth - element.clientWidth
      ),
      y: Math.max(
        0,
        yP * parentElement.current!.clientHeight - element.clientHeight
      ),
    });
  }, [xP, yP, ref, refParent, contextInitPos]);

  usePosition(refParent || ref, (_, { windowResize }) => {
    if (windowResize) {
      adjustDefaultPosition();
    }
  });

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
      if (lastZ === 0) {
        setZIndex(1);
      }
      if (lastZ !== zIndex) {
        setZIndex(lastZ + 1);
        setLastZ(lastZ + 1);
      }
      api.start({ x, y, config });
      event.preventDefault();
      event.stopPropagation();
    },
    {
      bounds: () => {
        const parentElement = refParent || ref;
        return (
          parentElement.current || { top: 0, left: 0, bottom: 0, right: 0 }
        );
      },
      from: () => [x.get(), y.get()],
      filterTaps: true,
      axis,
    }
  );

  return (
    <a.div
      {...bind()}
      style={{ top: y, left: x, zIndex }}
      ref={ref}
      className={`absolute touch-none ${className}`}
    >
      {children}
    </a.div>
  );
}
