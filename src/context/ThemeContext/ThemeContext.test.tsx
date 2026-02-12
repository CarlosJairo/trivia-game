import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { LIGHT, DARK, type ThemeContextType } from "../../utils/constans";

describe("ThemeContext", () => {
  it("should have undefined as the default value", () => {
    let capturedValue: any = "initial";

    const TestComponent = () => {
      capturedValue = useContext(ThemeContext);
      return null;
    };

    render(<TestComponent />);

    expect(capturedValue).toBeUndefined();
  });

  it("should provide the value passed to the Provider", () => {
    const mockValue: ThemeContextType = {
      theme: DARK,
      toggleTheme: vi.fn(),
    };

    const TestComponent = () => {
      const context = useContext(ThemeContext);
      return <div>Current theme: {context?.theme}</div>;
    };

    render(
      <ThemeContext.Provider value={mockValue}>
        <TestComponent />
      </ThemeContext.Provider>,
    );

    expect(screen.getByText(`Current theme: ${DARK}`)).toBeInTheDocument();
  });

  it("should update when the Provider value changes", () => {
    const TestComponent = () => {
      const context = useContext(ThemeContext);
      return <div>{context?.theme}</div>;
    };

    const { rerender } = render(
      <ThemeContext.Provider value={{ theme: LIGHT, toggleTheme: () => {} }}>
        <TestComponent />
      </ThemeContext.Provider>,
    );

    expect(screen.getByText(LIGHT)).toBeInTheDocument();

    rerender(
      <ThemeContext.Provider value={{ theme: DARK, toggleTheme: () => {} }}>
        <TestComponent />
      </ThemeContext.Provider>,
    );

    expect(screen.getByText(DARK)).toBeInTheDocument();
  });
});
