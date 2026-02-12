import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "./ThemeProvider";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
import { LIGHT, DARK } from "../../utils/constans";

const ThemeConsumer = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  return (
    <div>
      <span data-testid="theme-value">{context.theme}</span>
      <button onClick={context.toggleTheme}>Toggle</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  it("provides the default LIGHT theme", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    const themeSpan = screen.getByTestId("theme-value");
    expect(themeSpan.textContent).toBe(LIGHT);
  });

  it("toggles the theme from LIGHT to DARK and back", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    const themeSpan = screen.getByTestId("theme-value");
    const toggleButton = screen.getByRole("button", { name: /toggle/i });

    expect(themeSpan.textContent).toBe(LIGHT);

    fireEvent.click(toggleButton);
    expect(themeSpan.textContent).toBe(DARK);

    fireEvent.click(toggleButton);
    expect(themeSpan.textContent).toBe(LIGHT);
  });

  it("renders children correctly", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Hello World</div>
      </ThemeProvider>,
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
