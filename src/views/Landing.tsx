import Link from "../components/Link";

import mailIcon from "../iconos/mail.svg";
import arrowDownIcon from "../iconos/arrow-down.svg";
import { animated as a, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import SocialButtons from "../SocialButtons";

const config = {
  mass: 1,
  friction: 5,
  tension: 30,
};

const Landing = () => {
  const [{ x }, api] = useSpring(() => ({
    x: 0,
  }));

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: 20 },
    loop: { reverse: true },
    config,
  });

  const { background } = useSpring({
    from: {
      background: "#5fbdec",
      // background: "linear-gradient(to bottom right, #5fbdec, #dc7ab6)",
    },
    to: {
      // background: "linear-gradient(to bottom right, #5fbdec, #94d3f2)",
      background: "#94d3f2",
    },
    loop: {
      reverse: true,
    },
    config,
  });

  const bind = useDrag(
    ({ offset }) => {
      api.start({ x: offset[0] });
    },
    {
      axis: "x",
      bounds: { left: -3, right: 10 },
    }
  );

  return (
    <div
      className="relative bg-transparent overflow-x-clip text-black touch-pan-y"
      {...bind()}
    >
      <a.div
        style={{
          /* backgroundPosition: xy.to((x) => `${x / 4}vw 0%`) */ background,
        }}
        className="absolute top-0 left-0 bg-fixed w-full h-full"
      ></a.div>
      <div className="flex flex-wrap w-full h-screen justify-center content-center gap-y-2 relative z-10">
        <div className="relative">
          <a.h1
            style={{ x: x.to((x) => x - 5) }}
            className="absolute -z-10 text-center text-gray-400 block w-full font-['Coming_Soon'] font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl select-none"
          >
            Ernesto Ramírez
          </a.h1>
          <h1 className="top-0 left-0 text-center block w-full font-['Coming_Soon'] font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl select-none">
            Ernesto Ramírez
          </h1>
        </div>
        <div className="flex flex-wrap w-full justify-center items-center gap-x-2">
          <SocialButtons></SocialButtons>
        </div>
        <div className="flex w-full justify-center content-center">
          <Link
            href={"mailto:ernestorb_@outlook.com"}
            className="bg-white text-black shadow-lg"
          >
            <img src={mailIcon} alt="Email" className="inline w-8 h-8" />
            <span>Mándame un correo</span>
          </Link>
        </div>
        <a.a
          style={{ y }}
          href="#me"
          className="absolute bottom-12 flex items-center justify-center border rounded-full border-white bg-white w-8 h-8 shadow-lg"
        >
          <img src={arrowDownIcon} alt="arrow" className="inline w-4 h-4" />
        </a.a>
      </div>
    </div>
  );
};

export default Landing;
