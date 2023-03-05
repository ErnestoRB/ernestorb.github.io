import { render, screen } from "@testing-library/react";
import Tech from "./Tenchologies";

test.skip("render Tech stack", () => {
  render(<Tech />);
  expect(screen.getByText(/tecnologías/i)).toBeInTheDocument();
});
