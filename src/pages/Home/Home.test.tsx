import HomePage from "./HomePage";
import { render, screen } from "../../test/test-utils";

describe("HomePage", () => {
  test("renders homepage", () => {
    render(<HomePage />);
    expect(screen.getByText(/trivia game/i)).toBeInTheDocument();
  });
});
