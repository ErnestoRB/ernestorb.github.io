import { render, screen } from "@testing-library/react";
import AboutMe from "./views/AboutMe";

test("render name in AboutMe section", () => {
  render(<AboutMe />);
  const name = screen.getByText(/Ernesto Ram.rez/i);
  expect(name).toBeInTheDocument();
});
