import { useCallback, useEffect, useRef, useState } from "react";
import arrowRight from "../iconos/arrow-right.svg";

export interface SlideItem {
  src: string;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
}

export interface SliderProps {
  images: SlideItem[];
  loop?: boolean;
  className?: string;
  barClassName?: string;
  transition?: string;
  autoplay?: boolean;
  duration?: number;
  imagesBackground?: string;
}

export default function Slider({
  images,
  className = "",
  barClassName = "",
  autoplay = false,
  duration = 5000,
  loop = true,
  transition = "translate 1s",
  imagesBackground = "white",
}: SliderProps) {
  const [page, setPage] = useState(0);
  const intervalId = useRef<number | undefined>(undefined);
  const wasUserLast = useRef<boolean>(false);

  const increasePage = useCallback(() => {
    if (!loop) {
      setPage((page) => Math.max(0, page - 1));
      return;
    }

    setPage((page) => (page == images.length - 1 ? 0 : page + 1));
  }, [images, loop, setPage]);

  const decreasePage = useCallback(() => {
    if (!loop) {
      setPage((page) => Math.min(images.length - 1, page + 1));
      return;
    }
    setPage((page) => (page == 0 ? images.length - 1 : page - 1));
  }, [images, loop, setPage]);

  useEffect(() => {
    if (autoplay && images.length > 1 && !intervalId.current) {
      console.log("Creando temporizador");

      /// @ts-ignore
      intervalId.current = setInterval(() => {
        if (wasUserLast.current) {
          wasUserLast.current = false;
          return;
        }
        increasePage();
      }, duration);

      return () => {
        clearInterval(intervalId.current);
        intervalId.current = undefined;
      };
    }
  }, [autoplay, images, increasePage, duration]);

  return (
    <div
      style={{ overflow: "hidden", position: "relative" }}
      className={className}
    >
      <div
        style={{
          transition,
          translate: `-${page}00%`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {images.map((slide, i) => (
          <div
            key={slide.src}
            style={{
              background: imagesBackground,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: slide.objectFit || "cover",
              }}
              src={slide.src}
              alt={`img ${i}`}
            ></img>
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "5px",
              bottom: 0,
              right: 0,
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                transition: "width 1s",
                width: `${(page * 100) / (images.length - 1)}%`,
                height: "100%",
              }}
              className={barClassName}
            ></div>
          </div>
          <button
            style={{
              position: "absolute",
              left: 0,
              width: "30px",
              height: "30px",
              top: "50%",
            }}
            onClick={() => {
              decreasePage();
              wasUserLast.current = true;
            }}
          >
            <img
              src={arrowRight}
              style={{ rotate: "180deg" }}
              alt="arrow to go left"
            />
          </button>
          <button
            style={{
              position: "absolute",
              top: "50%",
              height: "30px",
              width: "30px",
              right: 0,
            }}
            onClick={() => {
              increasePage();
              wasUserLast.current = true;
            }}
          >
            <img src={arrowRight} alt="arrow to go right" />
          </button>
        </>
      )}
    </div>
  );
}
