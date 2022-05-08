import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Ernesto Ramírez Web Developer";
  }, []);

  return (
    <div
      className="flex bg-white h-screen w-screen items-center 
    justify-center flex-wrap md:flex-row md:gap-x-8 gap-0"
    >
      <img
        alt="My face"
        className="rounded-full aspect-square w-32 xl:w-48 shadow border-red-400 border-4"
        src="https://avatars.githubusercontent.com/u/55329286"
      />
      <div className="w-full max-w-screen-md min-h-max">
        <h1 className="text-center block font-['Schoolbell'] font-semibold text-4xl lg:text-6xl">
          Ernesto Ramírez
        </h1>
        <span className="font-semibold">
          Ingeniero en Sistemas Computacionales
          <br />
          Benemérita Universidad Autónoma de Aguascalientes
        </span>
        <span className="block text-right">+52 449 114 3654</span>
        <span className="block text-right">
          Mi email:{" "}
          <a href="mailto:ernestorb_@outlook.com" className="text-blue-600">
            ernestorb_@outlook.com
          </a>
        </span>

        <p className="text-justify font-light">
          Estudiante apasionado a la tecnología, al desarrollo WEB y a la
          cafeína. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat dignissimos voluptates ducimus eligendi aut animi laudantium,
          labore ullam iste. Enim est earum non necessitatibus animi explicabo
          possimus perspiciatis. Asperiores, cum! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quae perferendis voluptas vitae
          voluptatum laudantium doloribus corrupti deserunt. Possimus, assumenda
          vitae repellendus nemo quidem itaque? Earum aliquid numquam
          perspiciatis accusamus quaerat?
        </p>
        <p className="text-justify font-thin">
          Aún estoy creando contenido para mi página WEB, por favor, indaga más
          de mi en mi GitHub y contáctame por correo o teléfono para poder
        </p>
      </div>
    </div>
  );
}

export default App;
