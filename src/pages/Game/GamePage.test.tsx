import { render, screen, fireEvent, act } from "../../test/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import GamePage from "./GamePage";
import { useParams } from "react-router-dom";
import { UI_TEXT } from "../../utils/uiText";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock("../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(() => ({ theme: "light" })),
}));

vi.mock("../../data/questions.json", () => ({
  default: {
    history: {
      questions: [
        { id: 1, question: "Q1", options: ["A", "B"], correctAnswer: "A" },
        { id: 2, question: "Q2", options: ["C", "D"], correctAnswer: "C" },
      ],
    },
  },
}));

describe("GamePage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  it("renders NotFound when category does not exist", () => {
    (useParams as any).mockReturnValue({ category: "invalid-category" });

    render(<GamePage />);

    expect(screen.getByText(UI_TEXT.categoryNotFound)).toBeInTheDocument();
  });

  it("navigates through questions and shows results at the end", async () => {
    (useParams as any).mockReturnValue({ category: "history" });

    render(<GamePage />);

    expect(screen.getByText("Q1")).toBeInTheDocument();
    const correctBtn1 = screen.getByRole("button", { name: "A" });

    fireEvent.click(correctBtn1);

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByText("Q2")).toBeInTheDocument();
    const incorrectBtn2 = screen.getByRole("button", { name: "D" });

    fireEvent.click(incorrectBtn2);

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByText(UI_TEXT.gameOver)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${UI_TEXT.finalScore}\\s*1\\s*/\\s*2`)),
    ).toBeInTheDocument();
  });
});
