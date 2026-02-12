import { render, screen } from "../../../test/test-utils";
import { describe, it, expect, vi } from "vitest";
import Results from "./Results";
import { UI_TEXT } from "../../../utils/uiText";

vi.mock("../../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(() => ({ theme: "light" })),
}));

describe("Results Component", () => {
  const mockQuestions = [
    { id: 1, question: "Q1", options: [], correctAnswer: "A" },
    { id: 2, question: "Q2", options: [], correctAnswer: "B" },
    { id: 3, question: "Q3", options: [], correctAnswer: "C" },
  ];

  const defaultProps = {
    score: 2,
    categoryQuestions: mockQuestions,
  };

  it("renders the game over title and correct score text", () => {
    render(<Results {...defaultProps} />);

    expect(screen.getByText(UI_TEXT.gameOver)).toBeInTheDocument();

    const scoreRegex = new RegExp(`${UI_TEXT.finalScore}\\s*2\\s*/\\s*3`);
    expect(screen.getByText(scoreRegex)).toBeInTheDocument();
  });

  it("renders a button with a link to the home page", () => {
    render(<Results {...defaultProps} />);

    const link = screen.getByRole("link", { name: UI_TEXT.tryAgain });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
