import reactIcon from "../iconos/react.svg";
import ghIcon from "../iconos/github-white.svg";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white px-4 md:px-16 py-8">
      <b className="block w-full text-center">
        ¡Gracias por visitar mi página!
      </b>
      <span className="block w-full text-center">
        <img
          src={reactIcon}
          className="inline-block w-8 h-8 mx-2"
          alt="react logo"
        />
        Hecho con React
      </span>
      <span className="block w-full text-center">
        <img
          src={ghIcon}
          className="text-white inline-block mx-2 w-8 h-8"
          alt="react logo"
        />
        Alojado en GitHub Pages
      </span>
    </div>
  );
}
