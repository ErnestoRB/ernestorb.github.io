import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import AboutMe from "./views/AboutMe";

it("render name in AboutMe section", () => {
  render(<AboutMe />);
  const name = screen.getByText(/Ernesto Ram.rez/i);
  expect(name).toBeDefined();
});
