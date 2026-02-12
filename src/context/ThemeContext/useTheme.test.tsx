import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useTheme from "./useTheme";
import { ThemeProvider } from "./ThemeProvider";
import { LIGHT } from "../../utils/constans";

describe("useTheme Hook", () => {
  it("returns context values when used within a ThemeProvider", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.theme).toBe(LIGHT);
    expect(typeof result.current.toggleTheme).toBe("function");
  });

  it("throws an error when used outside of a ThemeProvider", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => renderHook(() => useTheme())).toThrow(
      "Theme context only works wihin a provider",
    );

    consoleSpy.mockRestore();
  });
});
