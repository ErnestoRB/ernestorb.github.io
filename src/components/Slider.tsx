import { useState } from "react";
import arrowRight from "../iconos/arrow-right.svg";

export default function Slider({
  images,
  className = "",
  barClassName = "",
}: {
  images: string[];
  className?: string;
  barClassName?: string;
}) {
  const [page, setPage] = useState(0);

  return (
    <div
      style={{ overflow: "hidden", position: "relative" }}
      className={className}
    >
      <div
        style={{
          transition: "translate 1s",
          translate: `-${page}00%`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        {images.map((url, i) => (
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={url}
              alt="img"
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
            onClick={() => setPage((state) => Math.max(0, state - 1))}
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
            onClick={() =>
              setPage((state) => Math.min(images.length - 1, state + 1))
            }
          >
            <img src={arrowRight} alt="arrow to go right" />
          </button>
        </>
      )}
    </div>
  );
}
