import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DarkIcon, LightIcon } from "./IconsSVG";

describe("Icons", () => {
  it("renders LightIcon with correct viewBox and svg structure", () => {
    const { container } = render(<LightIcon />);

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute("viewBox", "0 0 384 512");
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });

  it("renders DarkIcon with correct viewBox and svg structure", () => {
    const { container } = render(<DarkIcon />);

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute("viewBox", "0 0 512 512");

    const pathElement = container.querySelector("path");
    expect(pathElement).toBeInTheDocument();
  });
});
