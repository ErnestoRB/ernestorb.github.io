import { render, screen } from "@testing-library/react";
import TechonologiesPanel from "./TechnologiesPanel";

test.skip("render Tech stack", () => {
  render(<TechonologiesPanel width={1000} height={1000} />);
  expect(screen.getByText(/React/i)).toBeInTheDocument();
  expect(screen.getByText(/Angular/i)).toBeInTheDocument();
  expect(screen.getByText(/Java/i)).toBeInTheDocument();
  expect(screen.getByText(/Docker/i)).toBeInTheDocument();
});
