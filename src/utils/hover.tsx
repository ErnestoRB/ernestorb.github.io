import { MouseEventHandler } from "react";

export const registerHoverEvent = () => {
  const onMouseMove: MouseEventHandler<HTMLElement> = (e) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const onMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
    const { currentTarget } = e;
  };

  return {
    onMouseMove,
    onMouseLeave,
  };
};
