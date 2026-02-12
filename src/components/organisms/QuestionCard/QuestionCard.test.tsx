import { render, screen, fireEvent } from "../../../test/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import QuestionCard from "./QuestionCard";
import useTheme from "../../../context/ThemeContext/useTheme";

vi.mock("../../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(),
}));

describe("QuestionCard", () => {
  const mockQuestion = {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    correctAnswer: "Paris",
  };

  const mockOnAnswer = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    (useTheme as any).mockReturnValue({ theme: "light" });
  });

  it("renders the question and all options", () => {
    render(
      <QuestionCard questionData={mockQuestion} onAnswer={mockOnAnswer} />,
    );

    expect(screen.getByText(mockQuestion.question)).toBeInTheDocument();
    mockQuestion.options.forEach((option) => {
      expect(screen.getByRole("button", { name: option })).toBeInTheDocument();
    });
  });

  it("updates states and calls onAnswer when an option is selected", async () => {
    render(
      <QuestionCard questionData={mockQuestion} onAnswer={mockOnAnswer} />,
    );

    const wrongOption = screen.getByRole("button", { name: "London" });
    const correctOption = screen.getByRole("button", { name: "Paris" });

    fireEvent.click(wrongOption);

    expect(mockOnAnswer).toHaveBeenCalledWith("London");

    expect(wrongOption).toHaveAttribute("data-state", "wrong");
    expect(correctOption).toHaveAttribute("data-state", "correct");
  });
});
