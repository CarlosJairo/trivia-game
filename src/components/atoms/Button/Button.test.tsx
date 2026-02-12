import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";
import { DARK } from "../../../utils/constans";

// Mock useTheme
vi.mock("../../../context/ThemeContext/useTheme", () => ({
  default: vi.fn(),
}));

import useTheme from "../../../context/ThemeContext/useTheme";

describe("Button", () => {
  it("renders with light theme by default", () => {
    (useTheme as any).mockReturnValue({ theme: "light" });

    render(<Button>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("button--dark");
  });

  it("applies dark class when theme is DARK", () => {
    (useTheme as any).mockReturnValue({ theme: DARK });

    render(<Button>Dark Button</Button>);

    const button = screen.getByRole("button");
    expect(button.className).toContain("button--dark");
  });

  it("applies variant class when variant is provided", () => {
    (useTheme as any).mockReturnValue({ theme: "light" });

    render(<Button variant="primary">Primary</Button>);

    const button = screen.getByRole("button");
    expect(button.className).toContain("button--primary");
  });

  it("calls onClick when clicked", () => {
    (useTheme as any).mockReturnValue({ theme: "light" });

    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("spreads additional props", () => {
    (useTheme as any).mockReturnValue({ theme: "light" });

    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
