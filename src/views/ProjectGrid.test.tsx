import { render, screen } from "@testing-library/react";
import { ProjectGrid } from "./ProjectGrid";

test("render Projects", () => {
  render(<ProjectGrid />);
  const royal = screen.getByText(/Royalmind Network website/i);
  const tablist = screen.getByText(/TablistManagerAPI/i);
  const useposition = screen.getByText(/usePosition/i);
  const skywars = screen.getByText(/Skywars plugin/i);

  expect(skywars).toBeInTheDocument();
  expect(royal).toBeInTheDocument();
  expect(tablist).toBeInTheDocument();
  expect(useposition).toBeInTheDocument();
});
