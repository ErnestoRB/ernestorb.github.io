import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

test("render AboutMe component", () => {
  render(<AboutMe />);
  expect(screen.getByText(/Ernesto Ram.rez/i)).toBeInTheDocument();
  expect(screen.getByText(/Sobre mí/i)).toBeInTheDocument();
});
