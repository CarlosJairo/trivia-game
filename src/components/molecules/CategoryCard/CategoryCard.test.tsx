import { render, screen } from "../../../test/test-utils";
import { describe, it, expect, vi } from "vitest";

import CategoryCard from "./CategoryCard";

vi.mock("../../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(() => ({ theme: "light" })),
}));

describe("CategoryCard", () => {
  const defaultProps = {
    label: "History",
    image: "/path/to/history.jpg",
    to: "/quiz/history",
  };

  it("renders the correct label and image", () => {
    render(<CategoryCard {...defaultProps} />);

    expect(screen.getByText("History")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/path/to/history.jpg");
    expect(img).toHaveAttribute("alt", "History");
  });

  it("navigates to the correct path via the Link", () => {
    render(<CategoryCard {...defaultProps} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/quiz/history");
  });

  it("applies the correct CSS class from the module", () => {
    render(<CategoryCard {...defaultProps} />);

    const link = screen.getByRole("link");

    expect(link.className).toContain("card");
  });
});
