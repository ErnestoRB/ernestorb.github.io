import { useEffect } from "react";
import githubIcon from "./iconos/icons8-github.svg";

function App() {
  useEffect(() => {
    document.title = "Ernesto Ramírez Web Developer";
  }, []);

  return (
    <div
      className="flex bg-white h-screen w-screen items-center 
    justify-center flex-wrap md:flex-row md:gap-x-8 gap-0"
    >
      <div
        className="flex flex-col items-center md:flex-row md:gap-x-8
      w-full max-w-screen-sm min-h-max"
      >
        <div className="bg-gradient-to-br from-rose-500 to-blue-600 p-2 rounded-sm w-max">
          <img
            alt="My face"
            className="aspect-square w-32 xl:w-48 contrast-125"
            src="https://avatars.githubusercontent.com/u/55329286"
          />
        </div>
        <div className="w-full">
          <h1 className="text-center block font-['Schoolbell'] font-regular text-4xl lg:text-6xl my-8">
            Ernesto Ramírez
          </h1>
          <div className="my-4">
            <span className="block text-right">+52 449 114 3654</span>
            <span className="block text-right">
              Mi email:{" "}
              <a href="mailto:ernestorb_@outlook.com" className="text-blue-600">
                ernestorb_@outlook.com
              </a>
            </span>
          </div>

          <p className="text-justify font-light">
            Estudiante de Sistemas Computacionales, apasionado a la tecnología,
            al desarrollo WEB y a la cafeína.
            {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat dignissimos voluptates ducimus eligendi aut animi laudantium,
          labore ullam iste. Enim est earum non necessitatibus animi explicabo
          possimus perspiciatis. Asperiores, cum! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quae perferendis voluptas vitae
          voluptatum laudantium doloribus corrupti deserunt. Possimus, assumenda
          vitae repellendus nemo quidem itaque? Earum aliquid numquam
          perspiciatis accusamus quaerat? */}
          </p>
          <p className="text-justify font-thin">
            Aún estoy creando contenido para mi página WEB, por favor, indaga
            más de mi en mi GitHub y contáctame por correo o teléfono para poder
            platicar a detalle.
          </p>
          <div className="flex justify-center items-center mt-4">
            <a
              href="https://github.com/ErnestoRB"
              className="px-4 py-2 inline-flex justify-center items-center gap-x-2 bg-black text-white"
            >
              <img src={githubIcon} alt="GitHub repo" className="inline " />
              <span>Ir a mi GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
