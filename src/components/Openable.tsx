import { useSpring, animated as a } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";
import { usePosition } from "@ernestorb/useposition";

export default function Openable({
  children,
  className = "",
  sep = 40,
}: Omit<BasicComponentProps, "children"> & {
  children: React.ReactElement[];
  sep?: number;
}) {
  const [element, setElement] = useState<HTMLElement>();
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const active = useRef(false);

  const [open, setOpen] = useState(false);
  const [{ x, y, opacity }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotate: 0,
    opacity: "0%",
    onStart: {
      opacity: (result) => {
        active.current = true;
        if (result.value.animation.to === "100%") {
          setOpen(true);
        }
      },
    },
    onRest: {
      opacity: (result) => {
        active.current = false;
        if (result.value === "0%") {
          setOpen(false);
        }
      },
    },
    config: { duration: 200 },
  }));

  useEffect(() => {
    setElement(ref.current!);
  }, []);

  usePosition(
    element,
    ({ left, right, bottom, top, width, height }, { windowResize }) => {
      if (!menuRef.current) return;
      if (
        (bottom < 0 ||
          right < 0 ||
          left > window.innerWidth ||
          top > window.innerHeight) &&
        open
      ) {
        api.start({ opacity: "0%" });
        return;
      }
      const menuWidth = menuRef.current.clientWidth;
      const menuHeight = menuRef.current.clientHeight;

      const sizes = [
        {
          availableSpace: left,
          position: [
            left - menuWidth,
            top + height / 2 - menuHeight / 2,
          ] /* [0 - sep, height / 2] */,
          name: "l",
        },
        {
          availableSpace: window.innerWidth - right,
          position: [
            right,
            top + height / 2 - menuHeight / 2,
          ] /* [width + sep, height / 2] */,
          name: "r",
        },
        {
          availableSpace: top,
          position: [
            left + width / 2 - menuWidth / 2,
            top - menuHeight,
          ] /* [width / 2, 0 + sep] */,
          name: "t",
        },
        {
          availableSpace: window.innerHeight - bottom,
          position: [
            left + width / 2 - menuWidth / 2,
            bottom,
          ] /* [width / 2, height + sep] */,
          name: "b",
        },
      ];

      const {
        position: [x, y],
      } = sizes.reduce((p, c) =>
        Math.max(p.availableSpace, c.availableSpace) === p.availableSpace
          ? p
          : c
      );
      const nX = Math.max(Math.min(x, window.innerWidth), 0);
      const nY = Math.max(Math.min(y, window.innerHeight), 0);

      api.start({ x: nX, y: nY }); // solo desplazar
    },
    { callOnResize: true },
    [open]
  );

  return (
    <div ref={ref} className={`w-max ${className}`}>
      <div
        onClick={() => {
          if (active.current) {
            active.current = false;
            api.stop();
          }
          api.start({
            opacity: open ? "0%" : "100%",
          });
        }}
        role="button"
      >
        {children[0]}
      </div>
      <a.div
        className={`fixed ${open ? "" : "hidden"}`}
        style={{
          top: y,
          left: x,
          opacity,
        }}
        ref={menuRef}
      >
        {children[1]}
      </a.div>
    </div>
  );
}
