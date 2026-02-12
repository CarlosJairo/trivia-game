import { render, screen } from "../../test/test-utils";
import { describe, it, expect, vi } from "vitest";
import NotFound from "./NotFound";
import { UI_TEXT } from "../../utils/uiText";

vi.mock("../../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(() => ({ theme: "light" })),
}));

describe("NotFound Component", () => {
  it("renders the title and the go back link", () => {
    const title = "Page Not Found";
    render(<NotFound title={title} />);

    expect(
      screen.getByRole("heading", { level: 2, name: title }),
    ).toBeInTheDocument();

    const link = screen.getByRole("link", { name: UI_TEXT.goBack });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders the subtitle when provided", () => {
    const title = "Error";
    const subtitle = "The category you are looking for does not exist";

    render(<NotFound title={title} subtitle={subtitle} />);

    expect(
      screen.getByRole("heading", { level: 3, name: subtitle }),
    ).toBeInTheDocument();
  });

  it("does not render the subtitle heading if not provided", () => {
    render(<NotFound title="Only Title" />);

    const subtitleElement = screen.queryByRole("heading", { level: 3 });
    expect(subtitleElement).not.toBeInTheDocument();
  });
});
