import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";
import { it, expect } from "vitest";

it("render AboutMe component", () => {
  render(<AboutMe />);
  expect(screen.getByText(/Ernesto Ram.rez/i)).toBeDefined();
  expect(screen.getByText(/Sobre mí/i)).toBeDefined();
});
