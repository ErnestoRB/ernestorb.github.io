import LanguageIcon from "../components/languages/LanguageIcon";
import ProjectLink from "../components/links/ProjectLink";
import Slider from "../components/Slider";
import royalmind from "../images/royalmind.png";
import skywars from "../images/skywars.png";
import tablist from "../images/tablistmanager.png";
import tablistExample from "../images/tablist.png";
import skywarsExample1 from "../images/mc.png";

import useposition from "../images/usePosition.png";

export function ProjectGrid() {
  return (
    <div
      className="flex flex-wrap justify-center gap-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Project images={[royalmind]} title="Royalmind Network website">
        API REST y Página web de la red de servidores de Minecraft de minijuegos
        Royalmind Network (anteriormente MCMéxico)
      </Project>
      <Project images={[skywars, skywarsExample1]} title="Skywars plugin">
        Plugin para crear servidores del minijuego "Skywars" en el popular juego
        "Minecraft".
        <ProjectLink href="https://www.spigotmc.org/resources/skywars.107934/">
          <LanguageIcon lang="spigot" format="png"></LanguageIcon> Ir a SpigotMC
        </ProjectLink>
      </Project>
      <Project images={[useposition]} title="usePosition hook">
        Hook de React para obtener la posición en pantalla de un elemento de
        manera fácil y declarativa, con alto soporte en los navegadores.
        <ProjectLink href="https://www.npmjs.com/package/@ernestorb/useposition">
          <LanguageIcon lang="npm"></LanguageIcon> Ir a npm
        </ProjectLink>
      </Project>
      <Project images={[tablist, tablistExample]} title="TablistManagerAPI">
        API para manipular la tablist de jugadores en un servidor de SpigotMC.
        <ProjectLink href="https://www.spigotmc.org/resources/tablistmanager.107039/">
          <LanguageIcon lang="spigot" format="png"></LanguageIcon> Ir a SpigotMC
        </ProjectLink>
      </Project>
    </div>
  );
}

function Project({
  images,
  title,
  children,
}: {
  images: string[];
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-sm flex flex-col shadow-2xl dark:shadow-lg  w-64 lg:w-96 text-black dark:text-white">
      <Slider
        images={images}
        className="rounded-l-sm w-full h-32 lg:h-48 flex-0 object-cover"
      ></Slider>

      <div className="flex-1 p-4 ">
        <h3 className="font-bebas text-2xl">{title}</h3>
        <div className="text-sm font-quicksand">{children}</div>
      </div>
    </div>
  );
}
