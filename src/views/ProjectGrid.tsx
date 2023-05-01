import LanguageIcon from "../components/languages/LanguageIcon";
import ProjectLink from "../components/links/ProjectLink";
import { Slider, SlideItem } from "@ernestorb/components";
import royalmind from "../images/royalmind.png";
import skywars from "../images/skywars.png";
import tablist from "../images/tablistmanager.png";
import tablistExample from "../images/tablist.png";
import skywarsExample1 from "../images/mc.png";

import useposition from "../images/usePosition.png";
import asteroids from "../images/asteroids.png";

export function ProjectGrid() {
  return (
    <div
      className="flex flex-wrap justify-center gap-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Project images={[{ src: royalmind }]} title="Royalmind Network website">
        API REST y Página web de la red de servidores de Minecraft de minijuegos
        Royalmind Network (anteriormente MCMéxico)
      </Project>
      <Project
        imagesBackground="black"
        images={[
          { src: skywars },
          { src: skywarsExample1, objectFit: "scale-down" },
        ]}
        title="Skywars plugin"
      >
        Plugin para crear servidores del minijuego "Skywars" en el popular juego
        "Minecraft".
        <ProjectLink href="https://www.spigotmc.org/resources/skywars.107934/">
          <LanguageIcon lang="spigot" format="png"></LanguageIcon> Ir a SpigotMC
        </ProjectLink>
      </Project>
      <Project images={[{ src: useposition }]} title="usePosition hook">
        Hook de React para obtener la posición en pantalla de un elemento de
        manera fácil y declarativa, con alto soporte en los navegadores.
        <ProjectLink href="https://www.npmjs.com/package/@ernestorb/useposition">
          <LanguageIcon lang="npm"></LanguageIcon> Ir a npm
        </ProjectLink>
      </Project>
      <Project
        imagesBackground="black"
        images={[
          { src: tablist },
          { src: tablistExample, objectFit: "scale-down" },
        ]}
        title="TablistManagerAPI"
      >
        API para manipular la tablist de jugadores en un servidor de SpigotMC.
        <ProjectLink href="https://www.spigotmc.org/resources/tablistmanager.107039/">
          <LanguageIcon lang="spigot" format="png"></LanguageIcon> Ir a SpigotMC
        </ProjectLink>
      </Project>
      <Project
        images={[{ src: asteroids, objectFit: "contain" }]}
        title="Asteroides"
      >
        Implementación del clásico juego "Asteroids".
        <ProjectLink href="https://www.spigotmc.org/resources/tablistmanager.107039/">
          <LanguageIcon lang="github"></LanguageIcon> Ir a GitHub
        </ProjectLink>
      </Project>
    </div>
  );
}

function Project({
  images,
  title,
  children,
  imagesBackground,
}: {
  images: SlideItem[];
  title: string;
  children: React.ReactNode;
  imagesBackground?: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-sm flex flex-col shadow-2xl dark:shadow-lg  w-64 lg:w-96 text-black dark:text-white">
      <Slider
        autoplay
        imagesBackground={imagesBackground}
        images={images}
        className="rounded-l-sm w-full h-32 lg:h-48 flex-0 object-cover"
        barClassName="bg-black dark:bg-rose-1 "
      ></Slider>

      <div className="flex-1 p-4 ">
        <h3 className="font-bebas text-2xl">{title}</h3>
        <div className="text-sm font-quicksand">{children}</div>
      </div>
    </div>
  );
}
