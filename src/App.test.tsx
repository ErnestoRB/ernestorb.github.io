import { render, screen } from "@testing-library/react";
import { ResizeObserver } from "@juggle/resize-observer";
import AboutMe from "./views/AboutMe";
import ProjectCard from "./components/ProjectCard";

test("Pollyfills resizeObserver", () => {
  window.ResizeObserver = ResizeObserver;
  expect(window.ResizeObserver).toBeDefined();
});

test("render name in AboutMe section", () => {
  render(<AboutMe />);
  const name = screen.getByText(/Ernesto Ram.rez/i);
  expect(name).toBeInTheDocument();
});

test("render ProjectCard component sucessfully", () => {
  render(
    <ProjectCard
      name="Proyecto de prueba"
      description="Esto deberia ser montado"
      language="Java"
      html_url="/"
    />
  );
  const card = screen.getByAltText(/Java icon/);
  expect(screen.queryByAltText(/Python/)).toBeFalsy();

  expect(card).toBeInTheDocument();
});
