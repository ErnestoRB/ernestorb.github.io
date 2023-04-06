import toggleDarkIcon from "../iconos/dark-theme.svg";
import useDark from "../hooks/useDark";

export default function ToggleDark() {
  const { isDark, toggleDark } = useDark();

  return (
    <button className="bg-inherit" onClick={toggleDark}>
      {isDark ? "Oscuro" : "Claro"}
      <img
        className="w-6 h-6 inline-block mx-2"
        src={toggleDarkIcon}
        alt="Alternar tema"
      ></img>
    </button>
  );
}
