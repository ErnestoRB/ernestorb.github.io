import { render, screen } from "@testing-library/react";
import { ProjectGrid } from "./ProjectGrid";
import { it, expect } from "vitest";

it("render Projects", () => {
  render(<ProjectGrid />);
  const royal = screen.getByText(/Royalmind Network website/i);
  const tablist = screen.getByText(/TablistManagerAPI/i);
  const useposition = screen.getByText(/usePosition/i);
  const skywars = screen.getByText(/Skywars plugin/i);

  expect(skywars).toBeDefined();
  expect(royal).toBeDefined();
  expect(tablist).toBeDefined();
  expect(useposition).toBeDefined();
});
