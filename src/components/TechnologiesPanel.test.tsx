import { render, screen } from "@testing-library/react";
import TechonologiesPanel from "./TechnologiesPanel";
import { it, expect } from "vitest";

it("render Tech stack", () => {
  render(<TechonologiesPanel width={1000} height={1000} />);
  expect(screen.getAllByText("React")).toBeDefined();
  expect(screen.getAllByText(/Angular/i)).toBeDefined();
  expect(screen.getAllByText(/Java/i)).toBeDefined();
  expect(screen.getAllByText(/Docker/i)).toBeDefined();
});
