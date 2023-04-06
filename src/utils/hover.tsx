import { PointerEventHandler } from "react";

export const registerHoverEvent = () => {
  const onPointerMove: PointerEventHandler<HTMLElement> = (e) => {
    if (e.pointerType !== "mouse") {
      return;
    }
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const onPointerLeave: PointerEventHandler<HTMLElement> = (e) => {
    const { currentTarget } = e;
  };

  return {
    onPointerMove,
    onPointerLeave,
  };
};
