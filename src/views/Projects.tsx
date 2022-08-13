import Container from "../components/Container";
import ProjectCardList from "../components/ProjectCardList";
import H2 from "../components/text/H2";
import TextDecoration from "../components/text/TextDecoration";

export default function Projects() {
  return (
    <Container
      className="flex flex-col items-center w-full h-screen bg-rose-300"
      id="projects"
    >
      <H2 className="text-black font-bold z-10">
        <TextDecoration className="before:bg-white before:shadow-lg">
          Proyectos en GitHub
        </TextDecoration>
      </H2>
      <div className="w-full h-full flex items-center  px-6">
        <div className="px-6 shadow-2xl bg-white overflow-hidden">
          <ProjectCardList className="shadow-inner"></ProjectCardList>
        </div>
      </div>
    </Container>
  );
}
