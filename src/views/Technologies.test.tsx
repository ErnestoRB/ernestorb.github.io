import { render, screen } from "@testing-library/react";
import Tech from "./Tenchologies";

import { it, expect } from "vitest";

it("render Tech stack", () => {
  render(<Tech />);
  expect(screen.getByText(/tecnologías/i)).toBeDefined();
});
