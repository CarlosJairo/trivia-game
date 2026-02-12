import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CategorySelector from "./CategorySelector";

vi.mock("../../molecules/CategoryCard/CategoryCard", () => ({
  default: ({ label, image, to }: any) => (
    <div data-testid="category-card">
      <span>{label}</span>
      <span>{image}</span>
      <span>{to}</span>
    </div>
  ),
}));

describe("CategorySelector", () => {
  it("renders one CategoryCard per category", () => {
    render(<CategorySelector />);

    const cards = screen.getAllByTestId("category-card");

    expect(cards.length).toBe(3);
  });

  it("passes correct props to CategoryCard", () => {
    render(<CategorySelector />);

    expect(screen.getByText("programming")).toBeInTheDocument();
    expect(screen.getByText("maths")).toBeInTheDocument();
    expect(screen.getByText("general")).toBeInTheDocument();

    expect(screen.getByText("/game/programming")).toBeInTheDocument();
    expect(screen.getByText("/game/maths")).toBeInTheDocument();
    expect(screen.getByText("/game/general")).toBeInTheDocument();
  });
});
