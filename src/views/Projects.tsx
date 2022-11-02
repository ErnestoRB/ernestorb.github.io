import Container from "../components/Container";
import ProjectCardList from "../components/ProjectCardList";
import H2 from "../components/text/H2";
import TextDecoration from "../components/text/TextDecoration";

export default function Projects() {
  return (
    <Container
      className="flex flex-col items-center w-full h-screen bg-white"
      id="projects"
    >
      <H2 className="text-white font-bold z-10 translate-y-8">
        <TextDecoration className="before:bg-black before:shadow-2xl">
          Proyectos en GitHub
        </TextDecoration>
      </H2>
      <div className="w-full h-full flex items-center  px-6">
        <div className="border-x-8 border-black shadow-inner bg-gray-100 bg-opacity-5 0 overflow-hidden">
          <ProjectCardList className="shadow-inner"></ProjectCardList>
        </div>
      </div>
    </Container>
  );
}
