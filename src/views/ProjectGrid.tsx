import LanguageIcon from "../components/languages/LanguageIcon";
import ProjectLink from "../components/links/ProjectLink";
import royalmind from "../images/royalmind.png";
import skywars from "../images/skywars.png";
import tablist from "../images/tablistmanager.png";
import useposition from "../images/usePosition.png";

export function ProjectGrid() {
  return (
    <div
      className="flex flex-wrap justify-center gap-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Project img={royalmind} title="Royalmind Network website">
        API REST y Página web de la red de servidores de minijuegos Royalmind
        Network (anteriormente Minecraft México)
      </Project>
      <Project img={skywars} title="Skywars plugin">
        Plugin para crear servidores de minijuegos "Skywars" en el popular juego
        Minecraft.
        <ProjectLink href="https://www.spigotmc.org/resources/skywars.107934/">
          <LanguageIcon lang="spigot" format="png"></LanguageIcon> Ir a SpigotMC
        </ProjectLink>
      </Project>
      <Project img={useposition} title="usePosition hook">
        Hook de React para obtener la posición de un elemento de manera fácil y
        declarativa, con alto soporte en los navegadores.
        <ProjectLink href="https://www.npmjs.com/package/@ernestorb/useposition">
          <LanguageIcon lang="npm"></LanguageIcon> Ir a npm
        </ProjectLink>
      </Project>
      <Project img={tablist} title="TablistManagerAPI">
        API para manipular la tablist de jugadores en un servidor SpigotMC.
        <ProjectLink href="https://www.spigotmc.org/resources/tablistmanager.107039/">
          <LanguageIcon lang="spigot" format="png"></LanguageIcon> Ir a SpigotMC
        </ProjectLink>
      </Project>
    </div>
  );
}

function Project({
  img,
  title,
  children,
}: {
  img: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-700 rounded-sm flex flex-col shadow-lg text-white w-64 lg:w-96 ">
      <img
        src={img}
        alt={`Proyecto ${title}`}
        className="rounded-l-sm w-full h-32 lg:h-48 flex-0 object-cover"
      />
      <div className="flex-1 p-4 ">
        <h3 className="font-bebas text-2xl">{title}</h3>
        <div className="text-sm font-quicksand">{children}</div>
      </div>
    </div>
  );
}
