import { render, screen, fireEvent } from "../../../test/test-utils"; // Import your custom render
import { describe, it, expect, vi } from "vitest";
import AnswerOption from "./AnswerOption";

vi.mock("../../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(),
}));

import useTheme from "../../../context/ThemeContext/useTheme";

describe("AnswerOption", () => {
  const defaultProps = {
    option: "Paris",
    state: "idle",
    onSelect: vi.fn(),
  };

  it("renders the answer text and applies the data-state", () => {
    // Setup theme mock
    (useTheme as any).mockReturnValue({ theme: "light" });

    render(<AnswerOption {...defaultProps} />);

    const button = screen.getByRole("button", { name: /paris/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-state", "idle");
  });

  it("triggers onSelect with the correct value when clicked", () => {
    (useTheme as any).mockReturnValue({ theme: "light" });

    render(<AnswerOption {...defaultProps} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(defaultProps.onSelect).toHaveBeenCalledTimes(1);
    expect(defaultProps.onSelect).toHaveBeenCalledWith("Paris");
  });
});
